import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormProject, FormWrapper } from '@codeffekt/ce-core-data';
import { ProjectCreatorDialogComponent } from '../project-creator-dialog/project-creator-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { firstValueFrom } from 'rxjs';
import { CeFormsService, LayoutService } from '@codeffekt/ce-core';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-project-topbar',
  templateUrl: './project-topbar.component.html',
  styleUrls: ['./project-topbar.component.css']
})
export class ProjectTopbarComponent {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  constructor(
    private dialog: MatDialog,
    private router: Router,
    private formsService: CeFormsService,
    private layout: LayoutService,
  ) {

  }

  async createProject() {

    const dialogRef = ProjectCreatorDialogComponent.createDialog(this.dialog, {
      root: FormProject.ROOT,
      forceTemplateChoice: true,
    });

    const dialogRes = await firstValueFrom(dialogRef.afterClosed());

    if (dialogRes?.id) {
      try {
        const selectedTemplate = dialogRes;
        //const newProject = await this.formsService.createFormFromTemplate(selectedTemplate.id!, { name: selectedTemplate.name });
        const newProject = await this.formsService.createForm(selectedTemplate.id);
        this.layout.showSingleMessage(`Le projet ${selectedTemplate.title} à été créé.`);
        this.router.navigate([`/forms/edit/${newProject.id}`]);
      } catch (err) {
        this.layout.showErrorMessage(`Erreur lors de la création d'un nouveau projet`);
      }
    }

  }
}
