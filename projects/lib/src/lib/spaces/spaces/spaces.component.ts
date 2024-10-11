import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  CeBreadcrumbsService, 
  CeFormDataService, 
  CeFormQueryService, CeFormQueryWrapperModule,
  CeFormsService, CeListModule,
  CeNavigationModule, CeNgReallyModule,
  LayoutService,
  SpacesEditorFormatDatasource,
  SpacesEditorFormatQueryBuilder
} from '@codeffekt/ce-core';
import { FormSpaceEditorFormat, FormSpaceEditorFormatWrapper, FormWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { FormDataService } from '../../services/form-data.service';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CeNavigationModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CeFormQueryWrapperModule,
    CeListModule,
    CeNgReallyModule,
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
    private bcService: CeBreadcrumbsService,
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
    this.router.navigate(['editor', space.core.id], { relativeTo: this.route });
  }

  onNavigate(space: FormSpaceEditorFormatWrapper) {
    this.router.navigate(['form', space.core.id], { relativeTo: this.route });
  }

  idTrackBy(index: number, item: FormSpaceEditorFormatWrapper){
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

  async delete(project: FormSpaceEditorFormatWrapper) {
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
}
