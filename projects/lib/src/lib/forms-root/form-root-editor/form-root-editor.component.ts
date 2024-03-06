import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CeFormRouteParams, CeFormRouteResolver, CeFormsService, ICeFormRouteResolver, LayoutService } from '@codeffekt/ce-core';
import { FormInstance, FormInstanceBase, FormInstanceMaskWrapper, FormRoot, FormWrapper, IndexType, Utils } from '@codeffekt/ce-core-data';
import { Subscription, filter } from 'rxjs';
import { CeAdminRouteResolver, CE_ADMIN_ROUTE_RESOLVER } from '../../ce-admin-route.resolver';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { FormEditorDialogWrapperComponent } from '../form-editor-dialog-wrapper/form-editor-dialog-wrapper.component';
import { FormEditorJsonDialogComponent } from '../../forms/form-editor-json/form-editor-json.component';

@Injectable()
class FormRootEditorFormRouteResolver implements ICeFormRouteResolver {
  resolve(formField: string, formId: IndexType, formInstance: FormInstance): CeFormRouteParams {
    return { route: ['/formsroot/edit', formInstance.content[formField].root] };
  }
}

@Component({
  selector: 'ce-admin-form-root-editor',
  templateUrl: './form-root-editor.component.html',
  styleUrls: ['./form-root-editor.component.scss'],
  providers: [{
    provide: CeFormRouteResolver,
    useClass: FormRootEditorFormRouteResolver
  }]
})
export class FormRootEditorComponent implements OnInit {

  formWrapper!: FormWrapper<any>;
  formMaskWrapper!: FormInstanceMaskWrapper;

  newForm = true;

  private subscription = new Subscription();

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private layout: LayoutService,
    private apiService: CeFormsService,
    @Inject(CE_ADMIN_ROUTE_RESOLVER) private routeResolver: CeAdminRouteResolver) {
  }

  ngOnInit() {
    this.subscription.add(
      this.route.paramMap.subscribe(params => this.initFormWrapper(params.get("form") as any))
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  formChanges(formWrapper: FormWrapper<any>) {
    // todo
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

  openEditor() {


    const ref = this.dialog.open(
      FormEditorDialogWrapperComponent,
      FormEditorDialogWrapperComponent.createDialog({ forms: [this.formWrapper.core] })
    );

    ref.afterClosed()
      .pipe(
        filter(forms => !!forms && forms.length)
      )
      .subscribe(forms =>
        // TODO: Should save all forms
        this.save(forms[0])
      );
  }

  async save(formRoot: FormRoot) {
    try {
      const newFormRoot = await this.apiService.updateFormRoot(formRoot);
      this.layout.showSingleMessage("Modifications sauvegardées");
      if (this.newForm) {
        this.router.navigate(this.routeResolver.resolve("formsroot.edit", newFormRoot.id).route);
      }
      this.updateFormWrapper(newFormRoot);
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors la modification du formulaire`);
    }
  }

  private async initFormWrapper(id?: IndexType) {
    if (id) {
      this.newForm = false;
      const form = await this.apiService.getFormRoot(id).toPromise();
      this.updateFormWrapper(form);
    } else {
      this.newForm = true;
      this.updateFormWrapper({
        id: undefined as any,
        title: undefined as any,
        ctime: Date.now(),
        content: {}
      });
    }
  }

  private updateFormWrapper(form: FormInstanceBase) {
    this.formWrapper = new FormWrapper(FormWrapper.createProps(form), Utils.deepcopy(form) as any);
    this.formMaskWrapper = new FormInstanceMaskWrapper({
      content: {
        mask: {
          field: "mask",
          type: "mask",
          value: {
            content:
              Object.values(form.content).filter(block => block.type === "index").reduce((prev, cur) => (
                {
                  ...prev,
                  [cur.field]: {
                    ...cur,
                    value: cur.root
                  }
                }
              ), {})
          }
        }
      }
    } as any);
  }
}
