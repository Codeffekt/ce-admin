import { Inject, Injectable } from '@angular/core';
import { CeAppConfig, CeFormsService, CE_APP_CONFIG } from '@codeffekt/ce-core';
import {
  FormInstanceBase,
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

  async getProjectTypes(root: IndexType): Promise<FormInstanceBase[]> {
    const res = await firstValueFrom(this.formsService.getRawFormsRootQuery({
      queryFields: [{
        field: "type",
        op: "=",
        value: root,
        onMeta: true
      }],
      sortFields: [{
        field: "title",
        order: "asc",
        onMeta: true
      }]
    }));
    return res.elts;
  }

  getConfig(): CeAppConfig {
    return this.config;
  }

  setConfig(config: CeAppConfig) {
    this.config = config;
  }
}
