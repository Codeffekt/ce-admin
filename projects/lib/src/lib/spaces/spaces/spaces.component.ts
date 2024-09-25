import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  CeBreadcrumbsService, CeCoreService, 
  CeFormQueryService, CeFormQueryWrapperModule, 
  CeFormsService, CeListModule, 
  CeNavigationModule, CeNgReallyModule, 
  CeProjectsService, LayoutService, 
  SpacesEditorFormatDatasource,
  SpacesEditorFormatQueryBuilder} from '@codeffekt/ce-core';
import { FormSpaceEditorFormatWrapper, FormWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { FormCreatorDialogComponent, FormCreatorDialogModule } from '../../forms/form-creator-dialog';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CeNavigationModule,
    MatIconModule,
    CeFormQueryWrapperModule,
    CeListModule,
    CeNgReallyModule,
    FormCreatorDialogModule,
  ],
  providers: [
    CeFormQueryService,
  ],
  selector: 'lib-spaces',
  templateUrl: './spaces.component.html',
  styleUrls: ['./spaces.component.css']
})
export class SpacesComponent {
  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  projectsDataSource!: SpacesEditorFormatDatasource;
  projects$!: Observable<readonly FormSpaceEditorFormatWrapper[]>;

  constructor(
    private readonly queryService: CeFormQueryService<FormSpaceEditorFormatWrapper>,
    private router: Router,
    private route: ActivatedRoute,
    private layout: LayoutService,
    private formsService: CeFormsService,
    private coreService: CeCoreService,    
    private bcService: CeBreadcrumbsService,
    private dialog: MatDialog,
  ) {
    this.bcService.setItems([]);
    this.projectsDataSource = new SpacesEditorFormatDatasource(formsService);
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

  onSelected(space: FormSpaceEditorFormatWrapper) {
    //this.router.navigate(['forms', 'edit', project.core.id]);
    this.router.navigate([space.core.id], { relativeTo: this.route });
  }

  async createProject() {

    const dialogRef = this.dialog.open(FormCreatorDialogComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe(async (formConfig) => {
      if (formConfig) {
        try {
          const newForm = await this.formsService.createForm(formConfig.root);
          this.layout.showSingleMessage(`Le formulaire de type ${newForm.root} à été créé.`);          
          this.router.navigate(['home', 'spaces', newForm.id]);
        } catch (err) {
          this.layout.showErrorMessage(`Erreur lors de la création d'un nouveau formulaire`);
        }
      }
    });

  }

  async delete(project: FormSpaceEditorFormatWrapper) {
    try {
      // await this.projectsService.remove(project.core.id);
      // this.layout.showSingleMessage(`Le projet ${project.props.name} à été supprimé.`);
      this.reloadProjects();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la suppression du projet ${project.core.id}`);
    }
  }  

  private async prepareQueryService() {
    const currentUser = this.coreService.getCurrentUser();
    this.queryService.setQueryBuilder(
      SpacesEditorFormatQueryBuilder.create()
    );
    this.projects$ = this.queryService.connect();
    this.queryService.load();
  }
}
