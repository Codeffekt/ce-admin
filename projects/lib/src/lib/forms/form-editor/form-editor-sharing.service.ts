import { Injectable } from '@angular/core';
import { FormAccountWrapper, FormInstance, FormSharingWrapper } from '@codeffekt/ce-core-data';
import { FormSharingService } from '../../services/form-sharing.service';
import { CeFormQueryService, CeFormsService } from '@codeffekt/ce-core';
import { FormSharingDatasource } from '../form-users-shared';
import { Observable } from 'rxjs';

@Injectable()
export class FormEditorSharingService {

  private formsSharing$!: Observable<readonly FormSharingWrapper[]>;

  constructor(
    private formsService: CeFormsService,
    public formSharingService: FormSharingService,
    private queryService: CeFormQueryService<FormSharingWrapper>,
  ) { }

  listenToSharings(form: FormInstance) {
    const queryBuilder = this.formSharingService.createFormQueryBuilderForForm(form);
    this.queryService.setQueryBuilder(queryBuilder);

    const sharingDatasource = new FormSharingDatasource(this.formsService);
    this.queryService.setDatasource(sharingDatasource);
    this.formsSharing$ = this.queryService.connect();
    this.queryService.load();

    return this.formsSharing$;
  }

  async removeFormSharing(formSharing: FormSharingWrapper) {
    await this.formSharingService.removeFormSharing(formSharing);
    this.queryService.load();
  }

  async addFormSharing(form: FormInstance, user: FormAccountWrapper) {
    await this.formSharingService.addFormSharing(user.props.login, form);
    this.queryService.load();
  }

  reloadSharings() {
    this.queryService.load();
  }
}
