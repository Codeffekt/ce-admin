import { FormQueryBuilder } from "@codeffekt/ce-core";
import { FormAccountWrapper, IndexType } from "@codeffekt/ce-core-data";

export class FormOwnedFormQueryBuilder extends FormQueryBuilder {

    static forRoot(user: FormAccountWrapper, root: IndexType) {
        const builder = new FormOwnedFormQueryBuilder(user);
        builder.withRoot(root);        
        return builder;
    }    

    private constructor(user: FormAccountWrapper) {
        super();

        this.setQueryRootField({
            field: "author",
            op: "=",
            value: user.core.id,
            onMeta: true
        });
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