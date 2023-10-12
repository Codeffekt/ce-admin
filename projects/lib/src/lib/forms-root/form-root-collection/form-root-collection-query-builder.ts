import { FormQueryBuilder } from "@codeffekt/ce-core";
import { IndexType } from "@codeffekt/ce-core-data";

export class FormRootCollectionQueryBuilder extends FormQueryBuilder {    

    private constructor(root: IndexType) {
        super();
        this.setQueryField({
            field: 'root',
            op: '=',
            value: root,
            onMeta: true
        });
    }
   
    static fromRoot(root: IndexType) {
        return new FormRootCollectionQueryBuilder(root);
    }
}