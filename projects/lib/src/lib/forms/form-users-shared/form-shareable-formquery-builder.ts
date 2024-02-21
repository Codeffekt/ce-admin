import { FormQueryBuilder } from "@codeffekt/ce-core";
import { FormAccountWrapper, IndexType } from "@codeffekt/ce-core-data";

export class FormShareableFormQueryBuilder extends FormQueryBuilder {

    private constructor(user: FormAccountWrapper) {
        super();
        this.setQueryRootField({
            field: 'author',
            op: '!=',
            value: user.core.id,
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
                        value: user.props.login
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

    static forRoot(user: FormAccountWrapper, root: IndexType) {
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