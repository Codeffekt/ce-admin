import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { CeFormEditorService, CeFormRouteParams, CeFormRouteResolver, FormInfo, ICeFormRouteResolver } from '@codeffekt/ce-core';
import { FormInstance, FormInstanceMaskWrapper, FormWrapper, IndexType } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, filter, map, merge } from 'rxjs';
import { CE_ADMIN_ROUTE_RESOLVER, CeAdminRouteResolver } from '../../ce-admin-route.resolver';
import { FormEditorJsonDialogComponent } from '../form-editor-json/form-editor-json.component';
import { FormEditorLayoutConfig, FormEditorLayoutService } from './form-editor-layout.service';
import { FormEditorOperationsService } from './form-editor-operation.service';

@Injectable()
class FormEditorFormRouteResolver implements ICeFormRouteResolver {
  resolve(formField: string, formId: IndexType, formInstance: FormInstance): CeFormRouteParams {
    return { route: ['/forms/edit', formId] };
  }
}

@UntilDestroy()
@Component({
  selector: 'ce-admin-form-editor',
  templateUrl: './form-editor.component.html',
  styleUrls: ['./form-editor.component.scss'],
  providers: [
    FormEditorLayoutService,
    FormEditorOperationsService,

    {
      provide: CeFormRouteResolver,
      useClass: FormEditorFormRouteResolver
    }
  ]
})
export class FormEditorComponent implements OnInit {

  formInfo!: FormInfo;
  form!: FormInstance;
  formWrapper!: FormWrapper<any>;
  formMask!: FormInstanceMaskWrapper;
  formStr!: string;
  formEditorLayout$: Observable<FormEditorLayoutConfig> = this.formEditorLayoutService.configChanges();

  constructor(
    private route: ActivatedRoute,
    private formEditorService: CeFormEditorService,
    private formOperationService: FormEditorOperationsService,
    private dialog: MatDialog,
    @Inject(CE_ADMIN_ROUTE_RESOLVER) private routeResolver: CeAdminRouteResolver,
    private formEditorLayoutService: FormEditorLayoutService) {
    this.retrieveForm();
  }

  ngOnInit() { }

  deleteForm() {
    this.formOperationService.removeForm(this.form);
  }

  upgradeForm() {
    this.formOperationService.upgradeForm(this.form);
  }

  save(form: FormInstance) {
    this.formOperationService.save(form);
  }

  async formChanges(formWrapper: FormWrapper) {
    this.save(formWrapper.core)
  }

  openJSONEditor() {

    const ref = this.dialog.open(
      FormEditorJsonDialogComponent,
      FormEditorJsonDialogComponent.createDialog({ form: this.formWrapper.core })
    );

    ref.afterClosed()
      .pipe(
        filter(form => !!form)
      )
      .subscribe(form => this.save(form));
  }

  private updateFormInfo(formInfo: FormInfo) {
    this.formInfo = formInfo;
    this.form = this.formInfo.form.core;
    this.formWrapper = this.formInfo.form;
    this.formMask = this.formInfo.formMask;
  }

  private async retrieveForm() {
    const formInfoRoute$ = this.route.data
      .pipe(
        map(data => data.form)
      );

    merge(
      formInfoRoute$,
      this.formEditorService.onFormInfo()
    ).pipe(
      untilDestroyed(this)
    ).subscribe(formInfo => this.updateFormInfo(formInfo));
  }
}
