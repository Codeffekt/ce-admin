import { FormQueryBuilder } from "@codeffekt/ce-core";
import { FormAccount, FormInstance, FormQueryField } from "@codeffekt/ce-core-data";

const SEARCH_FILTER_FIELDS = ['login', 'email', 'firstName', 'lastName'];

export class UserShareableFormQueryBuilder extends FormQueryBuilder {

    private constructor(formInstance: FormInstance) {
        super();

        this.setQueryRootField({
            field: 'root',
            op: '=',
            value: FormAccount.ROOT
        });

        this.setQueryRootField({
            field: 'id',
            op: '!=',
            value: formInstance.author,
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
                        type: "form",
                        value: {
                            field: "login"
                        }
                    }, {
                        field: "form",
                        op: "=",
                        value: formInstance.id
                    }
                ]
            }
        ]);
    }


    setFilter(value: string): void {
        const formQueryFields: FormQueryField[] = SEARCH_FILTER_FIELDS.map(field => {
            return {
                field,
                op: "~~*",
                value: `%${value}%`
            }
        });
        this.setQueryFieldLogic({
            or: formQueryFields
        })

    }

    static forForm(form: FormInstance) {
        const builder = new UserShareableFormQueryBuilder(form);
        return builder;
    }

}