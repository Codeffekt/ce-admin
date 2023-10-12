import { Component, OnInit } from '@angular/core';
import { CeFormsService } from '@codeffekt/ce-core';
import { FormInstance, FormWrapper } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ReplaySubject } from 'rxjs';
import { AppRunnerService } from '../../../services/app-runner.service';

@UntilDestroy()
@Component({
  selector: 'lib-sub-form-editor',
  templateUrl: './sub-form-editor.component.html',
  styleUrls: ['./sub-form-editor.component.scss']
})
export class SubFormEditorComponent implements OnInit {

  wrapper$: ReplaySubject<FormWrapper> = new ReplaySubject();  

  constructor(
    private readonly appRunnerService: AppRunnerService,    
    private readonly formsService: CeFormsService,
  ) {
    
    appRunnerService.subForm$.pipe(
      untilDestroyed(this)
    ).subscribe(form => this.updateFormWrapper(form));

  }

  ngOnInit(): void {
  }

  async formChanges(formWrapper: FormWrapper) {
    this.update(formWrapper);
  }

  private async update(formWrapper: FormWrapper) {    
    const updatedForm = await this.formsService.updateForm(formWrapper.core as FormInstance); 
    this.updateFormWrapper(updatedForm);
  }

  private async updateFormWrapper(form: FormInstance) {    
    this.wrapper$.next(FormWrapper.fromForm(form));
  }
}
