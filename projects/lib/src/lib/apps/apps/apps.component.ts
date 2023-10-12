import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CeFormQueryService, CeFormsService, LayoutService } from "@codeffekt/ce-core";
import { FormWrapper } from "@codeffekt/ce-core-data";
import { Observable } from "rxjs";
import { AppsDataSource } from "./apps-datasource";
import { AppsFormQueryBuilder } from "./apps-formquery-builder";

@Component({
    selector: "ce-admin-apps",
    templateUrl: "./apps.component.html",
    styleUrls: ["./apps.component.scss"],
    providers: [
        CeFormQueryService
    ]
})
export class AppsComponent implements OnInit {

    appsDataSource!: AppsDataSource;
    formQueryBuilder: AppsFormQueryBuilder = new AppsFormQueryBuilder();
    apps$!: Observable<readonly FormWrapper[]>;

    constructor(
        private readonly queryService: CeFormQueryService<FormWrapper>,
        private router: Router,
        private layout: LayoutService,
        private formsService: CeFormsService,
    ) {
        this.appsDataSource = new AppsDataSource(this.formsService);
        this.queryService.setDatasource(this.appsDataSource);
        this.queryService.setQueryBuilder(this.formQueryBuilder);
        this.apps$ = this.queryService.connect();
        this.queryService.load();
    }

    ngOnInit() {
    }

    onSelected(form: FormWrapper) {
        this.router.navigate(['apps', form.core.id, 'edit']);
    }

    async delete(form: FormWrapper) {
        try {
            await this.formsService.deleteForm(form.core.id);
            this.layout.showSingleMessage(`Application supprimée avec succès`);
            this.queryService.load();
        } catch (err) {
            this.layout.showErrorMessage(`Erreur lors de la suppression de l'application`);
        }
    }

    createApplication() {

    }
}