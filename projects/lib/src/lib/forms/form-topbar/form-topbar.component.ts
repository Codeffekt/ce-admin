import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormWrapper } from '@codeffekt/ce-core-data';
import { CeFormEditorService, CeFormsService, LayoutService } from '@codeffekt/ce-core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-form-topbar',
  templateUrl: './form-topbar.component.html',
  styleUrls: ['./form-topbar.component.css']
})
export class FormTopbarComponent {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  constructor(
    private router: Router,
    private formsService: CeFormsService,
    private formEditorService: CeFormEditorService,
    private layoutService: LayoutService,
  ) { }

  async deleteForm() {
    try {
      await this.formsService.deleteForm(this.formWrapper.core.id);
      this.layoutService.showSingleMessage(`Suppression du formulaire effectuée`);
      this.router.navigate(['home', 'forms', 'forms']);
    } catch(err) {
      this.layoutService.showErrorMessage(`Erreur lors de la suppression du formulaire : ${(<any>err)?.message}`);
    }
  }

  async upgradeForm() {
    try {
      await this.formsService.formUpgrade(this.formWrapper.core.root, [this.formWrapper.core.id]);
      this.layoutService.showSingleMessage(`Mise à niveau du formulaire effectuée`);
      this.formEditorService.getForm(this.formWrapper.core.id, { forceReload: true });
  } catch (err) {
      this.layoutService.showErrorMessage(`Erreur lors de la mise à niveau : ${(<any>err)?.message}`);
  }
  }
}
