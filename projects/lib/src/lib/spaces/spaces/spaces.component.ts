import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CeBreadcrumbsService, 
  CeFormQueryService, CeFormQueryWrapperModule,
  CeFormsPipesModule,
  CeFormsService, CeListModule,
  CeNavigationModule, CeNgReallyModule,
  FormWrappersDataSource,
  LayoutService,
  SpacesEditorFormatQueryBuilder
} from '@codeffekt/ce-core';
import { FormSpaceEditorFormat, FormUtils, FormWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
    imports: [
        CommonModule,
        CeNavigationModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        CeFormQueryWrapperModule,
        CeListModule,
        CeFormsPipesModule,
        CeNgReallyModule,
    ],
    providers: [
        CeFormQueryService,
    ],
    selector: 'lib-spaces',
    templateUrl: './spaces.component.html',
    styleUrls: ['./spaces.component.scss']
})
export class SpacesComponent {
  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  projectsDataSource!: FormWrappersDataSource;
  projects$!: Observable<readonly FormWrapper[]>;

  constructor(
    private readonly queryService: CeFormQueryService<FormWrapper>,
    private router: Router,
    private route: ActivatedRoute,
    private layout: LayoutService,
    private formsService: CeFormsService,
    private bcService: CeBreadcrumbsService,
  ) {
    this.bcService.setItems([]);
    this.projectsDataSource = new FormWrappersDataSource(formsService);
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

  onEdit(space: FormWrapper) {
    this.router.navigate(['editor', space.core.id], { relativeTo: this.route });
  }

  onNavigate(space: FormWrapper) {
    const entryPoint = this.retrieveEntryPoint(space);
    this.router.navigate(['entries', space.core.id], { relativeTo: this.route });
  }

  idTrackBy(index: number, item: FormWrapper){
    return item.core.id; 
 }

  async createSpace() {
    try {
      const newForm = await this.formsService.createForm(
        FormSpaceEditorFormat.ROOT);
      this.layout.showSingleMessage(`Le formulaire de type ${newForm.root} à été créé.`);
      this.router.navigate(['editor', newForm.id], { relativeTo: this.route });
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la création d'un nouveau formulaire`);
    }
  }

  async delete(project: FormWrapper) {
    try {
      await this.formsService.deleteForm(project.core.id);
      this.layout.showSingleMessage(`L'espace ${project.core.id} à été supprimé.`);
      this.reloadProjects();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la suppression de l'espace ${project.core.id}`);
    }
  }

  private async prepareQueryService() {
    this.queryService.setQueryBuilder(
      SpacesEditorFormatQueryBuilder.create()
    );
    this.projects$ = this.queryService.connect();
    this.queryService.load();
  }

  private retrieveEntryPoint(project: FormWrapper) {
    const contextForm = FormUtils.getFormField("context", project.core);
    return FormWrapper.getFormValue("entryPoint", contextForm);
  }
}
