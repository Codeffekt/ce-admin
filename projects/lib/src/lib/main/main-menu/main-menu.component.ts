import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from "@angular/core";
import { FormActionDefault } from "@codeffekt/ce-core";

@Component({
    selector: 'ce-admin-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class CeAdminMainMenuComponent implements AfterViewInit {

    @ViewChild('container', { read: ViewContainerRef }) vcr!: ViewContainerRef;

    constructor(
        private formActionDefault: FormActionDefault,
    ) {

    }    

    ngAfterViewInit(): void {
        setTimeout(() => {
            this.createComponent();
        }, 0);
    }

    private createComponent() {
        const componentType = this.formActionDefault.menu();
        this.vcr.createComponent(componentType);
    }
}