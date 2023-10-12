import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CeCoreService } from '@codeffekt/ce-core';
import { DbArrayRes, FormInstance, FormQuery, FormWrapper, IndexType, Utils } from '@codeffekt/ce-core-data';
import { firstValueFrom } from 'rxjs';
import { CeAdminRouteResolver, CE_ADMIN_ROUTE_RESOLVER } from '../../ce-admin-route.resolver';

@Component({
  selector: 'lib-forms-version-editor',
  templateUrl: './forms-version-editor.component.html',
  styleUrls: ['./forms-version-editor.component.scss']
})
export class FormsVersionEditorComponent implements OnInit {

  form!: FormInstance;
  formWrapper!: FormWrapper<any>;

  constructor(
    private coreService: CeCoreService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(CE_ADMIN_ROUTE_RESOLVER) private routeResolver: CeAdminRouteResolver
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.initForm(params.get("form") as any))
  }

  back() {
    this.router.navigate(this.routeResolver.resolve("formsversion").route);
  }

  prevVersion() {
    const formId = (<any> this.form).version.prev;
    if(formId) {
      this.initForm(formId);
    }
  }

  nextVersion() {
    const formId = (<any> this.form).version.next;
    if(formId) {
      this.initForm(formId);
    }
  }

  private async initForm(formId?: IndexType) {
    if (formId) {
      const res = await firstValueFrom(this.coreService.call<DbArrayRes<FormInstance>>("PublicFormsVersion", "getFormsQuery", {
        indices: [formId]
      } as FormQuery));
      if (res.elts?.length) {
        this.form = res.elts[0];
      }
      this.updateFormWrapper();
    }
  }

  private updateFormWrapper() {
    this.formWrapper = this.createWrapperFromInstance(this.form);
  }

  private createWrapperFromInstance(form: FormInstance) {
    return new FormWrapper(FormWrapper.createProps(form), Utils.deepcopy(form));
  }
}
