import { Component, OnInit } from '@angular/core';
import { CeCoreService, CeFormQueryService, CeFormsService, ProjectsDataSource, ProjectsQueryBuilder } from '@codeffekt/ce-core';
import { FormProjectWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-media-projects',
  templateUrl: './media-projects.component.html',
  styleUrls: ['./media-projects.component.scss'],
  providers: [
    CeFormQueryService,    
  ]
})
export class MediaProjectsComponent implements OnInit {

  projectsDataSource!: ProjectsDataSource;
  projects$!: Observable<readonly FormProjectWrapper[]>;

  constructor(
    private readonly queryService: CeFormQueryService<FormProjectWrapper>,
    coreService: CeCoreService,
    formsService: CeFormsService) {
    this.projectsDataSource = new ProjectsDataSource(formsService);
    this.queryService.setDatasource(this.projectsDataSource);
    const currentUser = coreService.getCurrentUser();
    this.queryService.setQueryBuilder(
      ProjectsQueryBuilder.fromCurrentAccount(currentUser.settings)
    );       
  }

  ngOnInit() {
    this.observeDataSource();
  }

  private observeDataSource() {
    this.projects$ = this.queryService.connect();
    this.queryService.load();
  }
}
