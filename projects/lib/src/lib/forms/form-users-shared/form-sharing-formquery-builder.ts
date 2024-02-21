import { FormQueryBuilder } from "@codeffekt/ce-core";
import { FormAccountWrapper, FormInstance, FormSharing, IndexType } from "@codeffekt/ce-core-data";

export class FormSharingFormQueryBuilder extends FormQueryBuilder {

    static fromForm(form: FormInstance, group: IndexType) {
        const builder = new FormSharingFormQueryBuilder();
        builder.setForm(form.id);
        builder.setGroup(group);
        return builder;
    }

    static fromUser(account: FormAccountWrapper, root: IndexType) {
        const builder = new FormSharingFormQueryBuilder();
        builder.setGroup(account.props.account);
        builder.setRoot(root);
        builder.setLogin(account.props.login);
        return builder;
    }

    private constructor() {
        super();

        this.setQueryRootField({
            field: "root",
            op: "=",
            value: FormSharing.ROOT,
            onMeta: true
        });
    }

    setForm(form: IndexType) {
        this.setQueryField({
            field: "form",
            op: "=",
            value: form
        });
    }

    setLogin(login: IndexType) {
        this.setQueryField({
            field: "login",
            op: "=",
            value: login
        });
    }

    setGroup(group: IndexType) {
        this.setQueryField({
            field: "group",
            op: "=",
            value: group
        });
    }

    setRoot(root: IndexType) {
        this.setQueryField({
            field: 'root',
            op: '=',
            value: root
        });
    }
}