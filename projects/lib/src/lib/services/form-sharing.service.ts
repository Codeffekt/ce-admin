import { Injectable } from "@angular/core";
import { CeCoreService, FormActionService } from "@codeffekt/ce-core";
import { FormAccountWrapper, FormInstance, FormSharing, FormSharingWrapper, IndexType } from "@codeffekt/ce-core-data";
import { FormSharingFormQueryBuilder } from "../forms/form-users-shared/form-sharing-formquery-builder";

@Injectable({ providedIn: 'root' })
export class FormSharingService {

    constructor(
        private formActionService: FormActionService,
        private coreService: CeCoreService,
    ) { }

    async removeFormSharing(formSharing: FormSharingWrapper) {
        const form = formSharing.core;
        await this.formActionService.getActionFromForm(form).delete(form);
    }

    async addFormSharing(login: IndexType, form: FormInstance) {

        const currentAccount = this.coreService.getCurrentUser()?.settings.account;

        await this.formActionService
            .getActionFromForm(form)
            .create(FormSharing.ROOT, {
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

    createFormQueryBuilderForUser(account: FormAccountWrapper, root: IndexType) {
        return FormSharingFormQueryBuilder.fromUser(account, root);
    }
}