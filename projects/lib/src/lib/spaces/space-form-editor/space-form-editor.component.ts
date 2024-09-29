import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    CeFormModule, CeFormRouteResolver,
    CeGridModule, CeListModule, CeNavigationModule, 
    FormInfo
} from '@codeffekt/ce-core';
import { SpaceFormRouteResolver } from './space-form-route-resolver.service';
import { SpaceFormPathService } from './space-form-path.service';

@Component({
    selector: 'app-form-editor',
    standalone: true,
    imports: [
        CommonModule,
        CeNavigationModule,
        CeGridModule,
        CeFormModule,
        CeListModule,
    ],
    templateUrl: './space-form-editor.component.html',
    styleUrls: ['./space-form-editor.component.scss'],
    providers: [
        {
            provide: CeFormRouteResolver,
            useClass: SpaceFormRouteResolver,
        },
    ]
})
export class SpaceFormEditorComponent {

    private formService = inject(SpaceFormPathService);
    private formRouteResolver = inject(CeFormRouteResolver);
    currentForm$ = this.formService.onCurrentForm();
    currentForms$ = this.formService.onCurrentForms();

    onFormChanges(form: FormInfo, changes: any) {

    }

    onGoElt(form: FormInfo) {
        this.formRouteResolver.navigate(form.form.core.id, form.form.core);
    }
}
