import { Injectable } from "@angular/core";
import { CeCoreService, CeFormsService } from "@codeffekt/ce-core";
import { AccountSettings, FormInstance, FormSharing, FormSharingWrapper, IndexType } from "@codeffekt/ce-core-data";
import { FormSharingFormQueryBuilder } from "../forms/form-users-shared/form-sharing-formquery-builder";

@Injectable({ providedIn: 'root'})
export class FormSharingService {

    constructor(
        private formsService: CeFormsService,
        private coreService: CeCoreService,
        ) {}

    async removeFormSharing(formSharing: FormSharingWrapper) {
        await this.formsService.deleteForm(formSharing.core.id);
    }

    async addFormSharing(login: IndexType, form: FormInstance) {

        const currentAccount = this.coreService.getCurrentUser()?.settings.account;

        await this.formsService.createForm(FormSharing.ROOT, {
            login: login,
            group: currentAccount,
            form: form.id,
            root: form.root
        });
    }

    createFormQueryBuilderForForm(form: FormInstance) {
        const currentAccount = this.coreService.getCurrentUser()?.settings.account;
        return FormSharingFormQueryBuilder.fromForm(form, currentAccount);
    }

    createFormQueryBuilderForUser(account: AccountSettings, root: IndexType) {        
        return FormSharingFormQueryBuilder.fromUser(account, root);
    }
}