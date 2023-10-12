import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CeCoreService, CeFormQueryService, CeFormsService, ProjectsDataSource, ProjectsQueryBuilder } from '@codeffekt/ce-core';
import { FormProjectWrapper, FormWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { AppRunnerService } from '../../services/app-runner.service';

@Component({
  selector: 'lib-app-projects',
  templateUrl: './app-projects.component.html',
  styleUrls: ['./app-projects.component.scss'],
  providers: [
    CeFormQueryService
  ]
})
export class AppProjectsComponent implements OnInit {

  projectsDataSource!: ProjectsDataSource;
  projects$!: Observable<readonly FormProjectWrapper[]>;
  currentApp: FormWrapper;

  constructor(
    private router: Router,
    appRunnerService: AppRunnerService,
    formsService: CeFormsService,
    private queryService: CeFormQueryService<FormProjectWrapper>,
    coreService: CeCoreService,
    private cd: ChangeDetectorRef,
  ) {
    this.currentApp = appRunnerService.getCurrentApp()!;
    this.projectsDataSource = new ProjectsDataSource(formsService);
    const currentUser = coreService.getCurrentUser();
    this.queryService.setQueryBuilder(
      ProjectsQueryBuilder.fromCurrentAccount(
        currentUser.settings,
        this.currentApp.props.type
      )
    );
    this.queryService.setDatasource(this.projectsDataSource);
  }

  ngOnInit(): void {
    this.observeDataSource();
  }

  goToApps() {
    this.router.navigate(['apps']);
  }

  onSelected(project: FormProjectWrapper) {

    const formBlocks = project.getFormsBlocks();
    const assoc = formBlocks[0];

    this.router.navigate(['apps', this.currentApp.core.id, 'run', project.core.id, assoc.field]);
  }

  private observeDataSource() {
    this.projects$ = this.queryService.connect();
    this.queryService.load();
  }
}
