import { FormQueryBuilder } from "@codeffekt/ce-core";

export class ProcessingsFormQueryBuilder extends FormQueryBuilder {

    static create() {
        return new ProcessingsFormQueryBuilder();
    }

    private constructor() {
        super();

        this.setQueryRootField({
            field: 'root',
            op: '=',
            value: 'forms-processing'
        });
    }

}