import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IndexType } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ConfigurationService } from '../../services/configuration.service';

export interface FormTemplateOption {
  name: string;
  id?: IndexType;
}

export interface FormTemplateCreatorConfig {
  root: IndexType;
  forceTemplateChoice?: boolean;
}

export interface FormTemplateRes {
  selectedTemplate?: FormTemplateOption;
}

const FORM_TEMPLATE_EMPTY: FormTemplateOption = {
  name: "Modèle vide",
  id: undefined
}

@UntilDestroy()
@Component({
  selector: 'app-project-creator-dialog',
  templateUrl: './project-creator-dialog.component.html',
  styleUrls: ['./project-creator-dialog.component.scss']
})
export class ProjectCreatorDialogComponent implements OnInit {

  selectedTemplate?: FormTemplateOption;

  templateOptions: FormTemplateOption[] = [FORM_TEMPLATE_EMPTY];  

  formGroup!: FormGroup;

  static createDialog(dialog: MatDialog, data: FormTemplateCreatorConfig): MatDialogRef<ProjectCreatorDialogComponent, FormTemplateRes> {
    return dialog.open(ProjectCreatorDialogComponent, {
      width: '300px',
      data
    });
  }

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<ProjectCreatorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public config: FormTemplateCreatorConfig,
    private configService: ConfigurationService
  ) {
    this.initProjectTypes();
  }

  ngOnInit() {
    this.createForm();
  }

  dismiss() {
    this.dialogRef.close();
  }

  createFromSelectedTemplate() {
    this.dialogRef.close({
      selectedTemplate: this.selectedTemplate
    });
  }

  createFromEmpty() {
    this.dialogRef.close({});
  }

  private createForm() {
    this.formGroup = this.fb.group({      
      template: [FORM_TEMPLATE_EMPTY, Validators.required]
    });


    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(selection => this.selectedTemplate = selection.template);
  }

  private async initProjectTypes() {
    const formTemplates = await this.configService.getProjectTypes(this.config.root);
    this.templateOptions = [
      FORM_TEMPLATE_EMPTY,
      ...formTemplates.map(form => ({ id: form.core.id, name: form.props.name }))
    ];
  }
}
