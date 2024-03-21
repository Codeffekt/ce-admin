import { FormQueryBuilder } from "@codeffekt/ce-core";
import { AccountSettings, IndexType } from "@codeffekt/ce-core-data";

export class FormOwnedFormQueryBuilder extends FormQueryBuilder {

    static forRoot(user: AccountSettings, root: IndexType) {
        const builder = new FormOwnedFormQueryBuilder(user);
        builder.withRoot(root);        
        return builder;
    }    

    private constructor(user: AccountSettings) {
        super();

        this.setQueryRootField({
            field: "author",
            op: "=",
            value: user.id,
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