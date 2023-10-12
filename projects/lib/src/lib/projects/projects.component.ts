import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  CeCoreService,
  CeFormQueryService, CeFormsService,
  CeProjectsService, LayoutService,
  ProjectsDataSource,
  ProjectsQueryBuilder
} from '@codeffekt/ce-core';
import { FormProject, FormProjectWrapper, FormWrapper } from '@codeffekt/ce-core-data';
import { Observable, firstValueFrom } from 'rxjs';
import { ProjectCreatorDialogComponent } from './project-creator-dialog/project-creator-dialog.component';

@Component({
  selector: 'ce-admin-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  providers: [
    CeFormQueryService
  ]
})
export class ProjectsComponent implements OnInit {

  projectsDataSource!: ProjectsDataSource;
  projects$!: Observable<readonly FormProjectWrapper[]>;

  constructor(
    private readonly queryService: CeFormQueryService<FormProjectWrapper>,
    private router: Router,
    private dialog: MatDialog,
    private layout: LayoutService,
    private formsService: CeFormsService,
    private coreService: CeCoreService,
    private projectsService: CeProjectsService) {
    this.projectsDataSource = new ProjectsDataSource(formsService);
    this.queryService.setDatasource(this.projectsDataSource);
  }

  ngOnInit() {
    this.prepareQueryService();
  }

  ngOnDestroy() {

  }

  reloadProjects() {
    this.queryService.load();
  }

  async createProject() {

    const dialogRef = ProjectCreatorDialogComponent.createDialog(this.dialog, {
      root: FormProject.ROOT,
      forceTemplateChoice: true,
    });

    const dialogRes = await firstValueFrom(dialogRef.afterClosed());

    if (dialogRes?.selectedTemplate?.id) {
      try {
        const selectedTemplate = dialogRes.selectedTemplate;
        const newProject = await this.formsService.createFormFromTemplate(selectedTemplate.id!, { name: selectedTemplate.name });
        this.layout.showSingleMessage(`Le projet ${FormWrapper.getFormValue("name", newProject)} à été créé.`);
        this.router.navigate([`/forms/edit/${newProject.id}`]);
      } catch (err) {
        this.layout.showErrorMessage(`Erreur lors de la création d'un nouveau projet`);
      }
    }

  }

  onSelected(project: FormProjectWrapper) {
    this.router.navigate(['forms', 'edit', project.core.id]);
  }

  async delete(project: FormProjectWrapper) {
    try {
      await this.projectsService.remove(project.core.id);
      this.layout.showSingleMessage(`Le projet ${project.props.name} à été supprimé.`);
      this.reloadProjects();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la suppression du projet ${project.props.name}`);
    }
  }

  private async prepareQueryService() {
    const currentUser = this.coreService.getCurrentUser();
    this.queryService.setQueryBuilder(
      ProjectsQueryBuilder.fromCurrentAccount(currentUser.settings)
    );
    this.projects$ = this.queryService.connect();
    this.queryService.load();
  }
}
