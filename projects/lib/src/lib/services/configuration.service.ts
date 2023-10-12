import { Inject, Injectable } from '@angular/core';
import { CeAppConfig, CeFormsService, CE_APP_CONFIG } from '@codeffekt/ce-core';
import {
  FormProject, FormTemplate,
  FormTemplateWrapper, FormWrapper,
  IndexType,
  ProjectType
} from '@codeffekt/ce-core-data';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {

  constructor(
    @Inject(CE_APP_CONFIG) private config: CeAppConfig,
    private readonly formsService: CeFormsService,
  ) { }

  getProjectTypeLabel(projectType: ProjectType) {
    return this.config.projectTypes.find(elt => elt.projectType === projectType)?.label;
  }

  async getProjectTypes(root: IndexType): Promise<FormTemplateWrapper[]> {
    const res = await firstValueFrom(this.formsService.getRawFormsQuery({
      queryFields: [{
        field: "root",
        op: "=",
        value: FormTemplate.ROOT,
        onMeta: true
      }, {
        field: "root",
        op: "=",
        value: root
      }, {
        field: "form",
        op: "!="
      }],
      sortFields: [{
        field: "name",
        order: "asc"
      }]
    }));
    return res.elts.map(form => FormWrapper.fromForm(form));
  }

  getConfig(): CeAppConfig {
    return this.config;
  }

  setConfig(config: CeAppConfig) {
    this.config = config;
  }
}
