import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormRoot } from "@codeffekt/ce-core-data";

@Component({
    selector: 'lib-form-root-new',
    templateUrl: './form-root-new.component.html',
    styleUrls: ['./form-root-new.component.scss'],
})
export class FormRootNewComponent implements OnInit {

    formRoot!: FormRoot;

    constructor(
        private route: ActivatedRoute,
    ) { }

    ngOnInit(): void {
        this.retrieveFormRoot();
    }

    private async retrieveFormRoot() {
        this.formRoot = this.route.snapshot.data.form;
    }
}