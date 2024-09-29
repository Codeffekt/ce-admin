import { Component, Injectable, OnInit } from '@angular/core';
import {
  CeFormRouteParams, CeFormRouteResolver,
  CeFormsService,
  ICeFormRouteResolver
} from '@codeffekt/ce-core';
import {
  FormBlock, FormCreator, FormInstance,
  FormInstanceExt, FormInstanceMaskWrapper, FormUtils,
  FormWrapper, IndexType
} from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ReplaySubject } from 'rxjs';
import { AppRunnerService } from '../../services/app-runner.service';

@Injectable()
class FormEditorFormRouteResolver implements ICeFormRouteResolver {

  constructor(private readonly appRunnerService: AppRunnerService,) { }
  navigate(formId: IndexType, formInstance: FormInstance): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  resolve(formField: string, formId: IndexType, formInstance: FormInstance): CeFormRouteParams {
    const block = FormUtils.getBlockFromField(formInstance, formField);
    if (block.type === "index") {
      const assoc = this.findProjectAssoc(block, formInstance);
      return assoc ? this.resolveFromExternalForm(block, assoc) : this.resolveFromSubForm(block);
    } else if (block.type === "formArray" || block.type === "formAssoc") {
      return this.resolveFromFormArray(block, formId);
    }

    return { route: ['..', formId], isRelativeRoute: true };
  }

  private resolveFromSubForm(block: FormBlock) {
    return { route: [block.field], isRelativeRoute: true };
  }

  private findProjectAssoc(block: FormBlock, formInstance: FormInstanceExt) {
    const externalForm = FormUtils.getFormField(block.field, formInstance);
    const project = this.appRunnerService.getCurrentProject();
    return project?.getFormsBlocks().find(f => f.field === externalForm.table);
  }

  private resolveFromExternalForm(block: FormBlock, assoc: FormBlock) {
    return { route: ['../..', assoc?.field, block.value], isRelativeRoute: true };
  }

  private resolveFromFormArray(block: FormBlock, formId: IndexType) {
    const project = this.appRunnerService.getCurrentProject();
    const assoc = project?.getFormsBlocks().find(f => f.root === block.root);
    return { route: ['../..', assoc?.field, formId], isRelativeRoute: true };
  }
}

@UntilDestroy()
@Component({
  selector: 'lib-app-form-editor',
  templateUrl: './app-form-editor.component.html',
  styleUrls: ['./app-form-editor.component.scss'],
  providers: [{
    provide: CeFormRouteResolver,
    useClass: FormEditorFormRouteResolver,
    deps: [AppRunnerService]
  }]
})
export class AppFormEditorComponent implements OnInit {

  formMask: FormInstanceMaskWrapper | undefined;  
  wrapper$: ReplaySubject<FormWrapper> = new ReplaySubject();

  constructor(
    private readonly appRunnerService: AppRunnerService,
    private readonly formsService: CeFormsService,
  ) {

    appRunnerService.form$.pipe(
      untilDestroyed(this)
    ).subscribe(form => this.updateFormWrapper(form));

  }

  ngOnInit(): void {
  }

  async formChanges(formWrapper: FormWrapper) {
    const updatedForm = await this.formsService.updateForm(formWrapper.core as FormInstance);
    this.updateFormWrapper(updatedForm);
  }  

  private updateFormWrapper(form: FormInstanceExt) {
    this.formMask = this.appRunnerService.getMask(form.root);    
    this.wrapper$.next(FormWrapper.fromForm(form));
  }

}
