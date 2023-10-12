import { Injectable } from "@angular/core";
import { CeAccountService, CeFormsService, CeProjectsService, FormQueryAssocBuilder } from "@codeffekt/ce-core";
import {
    DbArrayRes,
    EltNotFoundError, FormBlock, 
    FormInstance, FormInstanceExt,
    FormInstanceMaskWrapper,
    FormProjectWrapper,
    FormUtils, FormWrapper,
    IndexType
} from "@codeffekt/ce-core-data";
import { firstValueFrom, ReplaySubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AppRunnerService {

    private currentApp: FormWrapper | undefined;
    private masks: FormInstanceMaskWrapper[] = [];
    private currentProject: FormProjectWrapper | undefined;
    private currentAssoc: FormBlock | undefined;
    private currentForm: FormInstanceExt | undefined;
    private currentSubForm: FormInstance | undefined;

    assoc$: ReplaySubject<FormBlock> = new ReplaySubject();
    form$: ReplaySubject<FormInstanceExt> = new ReplaySubject();
    subForm$: ReplaySubject<FormInstance> = new ReplaySubject();

    constructor(
        private readonly formsService: CeFormsService,
        private readonly accountService: CeAccountService,
        private readonly projectsService: CeProjectsService,
    ) { }

    async fetchCurrentApp(id: IndexType): Promise<void> {

        this.currentApp = undefined;

        const form = await this.formsService.getForm(id);

        if (!form) {
            throw new EltNotFoundError(`Application ${id} not found`, { id });
        }

        this.currentApp = FormWrapper.fromForm(form);
    }

    async fetchAppConfig() {
        if (!this.currentApp) {
            throw new Error("No current app");
        }

        await this.loadConfigFromApp();
    }

    async fetchAppProject(id: IndexType): Promise<FormProjectWrapper> {

        if (!this.currentApp) {
            throw new Error("No current app");
        }

        this.currentProject = await this.projectsService.getProject(id);

        if (!this.currentProject) {
            throw new EltNotFoundError(`Project ${id} not found`, { id });
        }

        this.projectsService.setCurrentProject(this.currentProject);

        return this.currentProject;
    }

    async fetchProjectAssoc(id: IndexType): Promise<FormBlock> {

        if (!this.currentProject) {
            throw new Error("No current project");
        }

        this.currentAssoc = this.currentProject
            .getFormsBlocks()
            .find(form => form.field === id);

        if (!this.currentAssoc) {
            throw new EltNotFoundError(`Forms ${id} not found`, { id });
        }

        this.assoc$.next(this.currentAssoc);

        return this.currentAssoc;
    }

    async fetchProjectForm(id: IndexType): Promise<FormInstanceExt> {

        if (!this.currentProject) {
            throw new Error("No current project");
        }

        if (!this.currentAssoc) {
            throw new Error("No current assoc");
        }

        const form = await this.formsService.getFormQuery(
            this.currentProject?.core.id,
            id,
            this.currentAssoc.field,
            {
                extMode: true
            }
        );

        if (!form) {
            throw new EltNotFoundError(`Form ${id} not found`, { id });
        }

        this.currentForm = form;

        this.form$.next(this.currentForm);

        return this.currentForm;
    }

    async fetchSubForm(field: IndexType): Promise<FormInstance> {

        if (!this.currentForm) {
            throw new Error("No current form");
        }

        const subForm = FormUtils.getFormField(field, this.currentForm);

        if (!subForm) {
            throw new Error(`Field ${field} not found`);
        }

        this.currentSubForm = subForm;

        this.subForm$.next(this.currentSubForm);

        return this.currentSubForm;
    }

    getCurrentApp(): FormWrapper | undefined {
        return this.currentApp;
    }

    getCurrentProjects(): FormProjectWrapper[] {
        return [];
    }

    getCurrentProject(): FormProjectWrapper | undefined {
        return this.currentProject;
    }

    getCurrentAssoc(): FormBlock | undefined {
        return this.currentAssoc;
    }

    getCurrentForm(): FormInstanceExt | undefined {
        return this.currentForm;
    }

    getCurrentSubForm(): FormInstance | undefined {
        return this.currentSubForm;
    }

    getMask(root: string) {
        return this.masks.find(mask => mask.props.root === root);
    }

    getMasks() {
        return this.masks;
    }

    private async loadConfigFromApp() {
        this.clearConfig();
        await this.loadMasks();
    }

    private async loadMasks() {
        const block = FormUtils.getBlockFromField(this.currentApp!.core as FormInstance, "masks")
        if (!block) {
            return;
        }
        const res = await this.getFormsFromTable(block);
        this.masks = res.elts.map(form => new FormInstanceMaskWrapper(form));
    }

    private getFormsFromTable(block: FormBlock): Promise<DbArrayRes<FormInstance>> {
        const builder = new FormQueryAssocBuilder();
        const appForm = this.currentApp!.core as FormInstance;
        builder.setAssoc(block, appForm);
        return firstValueFrom(this.formsService.getRawFormsQuery(builder.create()));
    }

    private clearConfig() {
        this.masks = [];
    }
}