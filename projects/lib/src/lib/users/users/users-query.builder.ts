import { FormQueryBuilder } from "@codeffekt/ce-core";
import { AccountSettings, FormAccount } from "@codeffekt/ce-core-data";

export class UsersQueryBuilder extends FormQueryBuilder {

    private constructor() {
        super();
        this.setQueryField({
            field: 'root',
            onMeta: true,
            op: '=',
            value: FormAccount.ROOT
        });
    }

    static fromCurrentAccount(account: AccountSettings): UsersQueryBuilder {
        const builder = new UsersQueryBuilder();
        builder.setQueryField({
            field: 'account',
            op: '=',
            value: account.account
        });
        return builder;
    }

    clearFilter(): void { }
}