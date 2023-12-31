import { Inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CeFormEditorService, CeFormsService, LayoutService } from '@codeffekt/ce-core';
import { FormInstance } from '@codeffekt/ce-core-data';
import { Observable, Subject } from 'rxjs';
import { CE_ADMIN_ROUTE_RESOLVER, CeAdminRouteResolver } from '../../ce-admin-route.resolver';
import { FormSharingService } from '../../services/form-sharing.service';
import { FormSharingDialogComponent } from './form-sharing-dialog/form-sharing-dialog.component';

@Injectable()
export class FormEditorOperationsService {

    private sharingOperationEnded$ = new Subject<boolean>();
    private formUpdate$ = new Subject<FormInstance>();

    constructor(
        private router: Router,
        private dialog: MatDialog,
        private layoutService: LayoutService,
        private formsService: CeFormsService,
        private formEditorService: CeFormEditorService,
        private formSharingService: FormSharingService,
        @Inject(CE_ADMIN_ROUTE_RESOLVER) private routeResolver: CeAdminRouteResolver) { }


    async removeForm(form: FormInstance) {
        try {
            await this.formsService.deleteForm(form.id);
            this.layoutService.showSingleMessage(`Suppression du formulaire effectuée`);
            this.router.navigate(this.routeResolver.resolve("forms").route);
        } catch (err) {
            this.layoutService.showErrorMessage(`Erreur lors de la suppression du formulaire : ${(<any>err)?.message}`);
        }
    }

    async upgradeForm(form: FormInstance) {
        try {
            await this.formsService.formUpgrade(form.root, [form.id]);
            this.layoutService.showSingleMessage(`Mise à niveau du formulaire effectuée`);
            this.formEditorService.getForm(form.id, { forceReload: true });
        } catch (err) {
            this.layoutService.showErrorMessage(`Erreur lors de la mise à niveau : ${(<any>err)?.message}`);
        }
    }

    async save(form: FormInstance) {
        try {
            await this.formEditorService.updateForm(form);
            this.layoutService.showSingleMessage("Modifications sauvegardées");
        } catch (err) {
            this.layoutService.showErrorMessage("Erreur lors de la sauvegarde");
        }
    }

    addSharing(form: FormInstance) {

        const ref = this.dialog.open(
            FormSharingDialogComponent,
            FormSharingDialogComponent.createDialog({
                filterForms: [],
                form
            }));

        ref.afterClosed().subscribe(_ => this.sharingOperationEnded$.next(true));
    }

    formChanges(): Observable<FormInstance> {
        return this.formUpdate$;
    }

    onSharingOperationEnded(): Observable<boolean> {
        return this.sharingOperationEnded$;
    }
}