import { Component, Input, OnInit } from '@angular/core';
import { CeFormQueryService, CeFormsService } from '@codeffekt/ce-core';
import { AccountSettings, FormProject, FormProjectWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { FormOwnedDatasource } from '../../forms/form-users-shared/form-owned-datasource';
import { FormOwnedFormQueryBuilder } from '../../forms/form-users-shared/form-owned-formquery-builder';

@Component({
  selector: 'ce-admin-user-projects-owned',
  templateUrl: './user-projects-owned.component.html',
  styleUrls: ['./user-projects-owned.component.scss'],
  providers: [CeFormQueryService]
})
export class UserProjectsOwnedComponent implements OnInit {

  @Input() account!: AccountSettings;

  formsProject$!: Observable<readonly FormProjectWrapper[]>;

  constructor(
    private readonly formsService: CeFormsService,
    private readonly queryService: CeFormQueryService<FormProjectWrapper>,
  ) {
  }

  ngOnInit(): void {
    this.initDataSource();
  }

  private initDataSource() {
    this.queryService.setQueryBuilder(
      FormOwnedFormQueryBuilder.forRoot(this.account, FormProject.ROOT)
    );
    this.queryService.setDatasource(new FormOwnedDatasource(this.formsService));
    this.formsProject$ = this.queryService.connect();
    this.queryService.load();
  }
}
