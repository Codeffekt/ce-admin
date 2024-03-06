import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { FormInstanceBase, IndexType } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ConfigurationService } from '../../services/configuration.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface FormTemplateCreatorConfig {
  root: IndexType;
  forceTemplateChoice?: boolean;
}

@UntilDestroy()
@Component({
  selector: 'app-project-creator-dialog',
  templateUrl: './project-creator-dialog.component.html',
  styleUrls: ['./project-creator-dialog.component.scss']
})
export class ProjectCreatorDialogComponent implements OnInit {

  selectedTemplate?: FormInstanceBase;

  templateOptions: FormInstanceBase[] = [];  

  formGroup!: UntypedFormGroup;

  static createDialog(dialog: MatDialog, data: FormTemplateCreatorConfig): MatDialogRef<ProjectCreatorDialogComponent, FormInstanceBase> {
    return dialog.open(ProjectCreatorDialogComponent, {
      width: '300px',
      data
    });
  }

  constructor(
    private fb: UntypedFormBuilder,
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
    this.dialogRef.close(this.selectedTemplate);
  }

  createFromEmpty() {
    this.dialogRef.close({});
  }

  private createForm() {
    this.formGroup = this.fb.group({      
      template: [null, Validators.required]
    });


    this.formGroup.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(selection => this.selectedTemplate = selection.template);
  }

  private async initProjectTypes() {
    const formTemplates = await this.configService.getProjectTypes(this.config.root);
    this.templateOptions = formTemplates;
  }
}
