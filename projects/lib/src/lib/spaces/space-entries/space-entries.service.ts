import { inject, Injectable } from '@angular/core';
import { CeFormsService } from '@codeffekt/ce-core';
import { FormInstance, FormInstanceExt, FormUtils, FormWrapper, IndexType } from '@codeffekt/ce-core-data';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SpaceEntriesService {

  private spaceEntryRoot!: IndexType;
  private spaceForm!: FormInstanceExt;
  private spaceFormContext!: FormInstance;
  private formsService = inject(CeFormsService);

  async setSpaceEntry(spaceId: IndexType) {
    this.spaceForm = await firstValueFrom(
      this.formsService.getRawFormQuery(spaceId, { extMode: true })
    );
    this.spaceFormContext = FormUtils.getFormField("context", this.spaceForm);
    this.spaceEntryRoot = FormWrapper.getFormValue("entryPoint", this.spaceFormContext);
  }

  getSpaceEntry() {
    return this.spaceEntryRoot;
  }

  getSpaceContext() {
    return this.spaceFormContext;
  }
}
