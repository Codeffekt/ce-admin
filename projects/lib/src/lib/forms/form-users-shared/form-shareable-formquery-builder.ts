import { FormQueryBuilder } from "@codeffekt/ce-core";
import { AccountSettings, IndexType } from "@codeffekt/ce-core-data";

export class FormShareableFormQueryBuilder extends FormQueryBuilder {

    private constructor(user: AccountSettings) {
        super();
        this.setQueryRootField({
            field: 'author',
            op: '!=',
            value: user.id,
            onMeta: true
        });

        this.setFiltersField([
            {
                op: "!=",
                queryFields: [
                    {
                        field: "root",
                        op: "=",
                        value: "forms-sharing",
                        onMeta: true
                    }, {
                        field: "login",
                        op: "=",
                        value: user.login
                    }, {
                        field: "form",
                        op: "=",
                        type: "form",
                        value: {
                            field: "id",
                            onMeta: true
                        }
                    }
                ]
            }
        ]);
    }

    static forRoot(user: AccountSettings, root: IndexType) {
        const builder = new FormShareableFormQueryBuilder(user);
        builder.withRoot(root);
        return builder;
    }

    private withRoot(root: IndexType) {
        this.setQueryRootField({
            field: "root",
            op: "=",
            value: root,
            onMeta: true
        });
    }
}