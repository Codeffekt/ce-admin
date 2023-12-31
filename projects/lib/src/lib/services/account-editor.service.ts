import { Injectable } from "@angular/core";
import { CeAccountService, CeCoreService } from "@codeffekt/ce-core";
import { IndexType, AccountSettings, ROLE_VIEW } from "@codeffekt/ce-core-data";
import { firstValueFrom, Observable, Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AccountEditorService {

    private _validity$ = new Subject<boolean>();

    constructor(
        private diagService: CeCoreService,
        private accountsService: CeAccountService
    ) { }

    updateValidity(isValid: boolean) {
        this._validity$.next(isValid);
    }

    observeAccountValidityChanges(): Observable<boolean> {
        return this._validity$;
    }

    createEmptyAccount(): AccountSettings {
        const currentUser = this.diagService.getCurrentUser();
        const newAccount = {
            role: ROLE_VIEW,
            account: currentUser.settings.account,
            lang: currentUser.settings.lang,
            projects: []
        } as any;

        return newAccount;
    }

    async fetchAccount(accountId: IndexType | null): Promise<AccountSettings> {
        if (accountId) {
            // Update account mode
            const account = await firstValueFrom(this.accountsService.getAccount(accountId));
            return account;
        }
        // New account mode
        return this.createEmptyAccount();
    }

    createAccount(account: AccountSettings): Promise<AccountSettings> {
        return firstValueFrom(this.accountsService.createAccount(account, account.passwd as any));
    }

    async updateAccount(account: AccountSettings): Promise<AccountSettings> {
        // An id has been found retrieved so we update the account
        const updatedAccount = await this.accountsService.update(account).toPromise();
        if (account.passwd?.length) {
            await this.accountsService.updatePassword(account.id, account.passwd).toPromise();
        }
        return updatedAccount;
    }
}