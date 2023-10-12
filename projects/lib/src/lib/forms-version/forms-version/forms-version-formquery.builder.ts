import { FormsFormQueryBuilder } from "@codeffekt/ce-core";

export class FormsVersionFormQueryBuilder extends FormsFormQueryBuilder {

    constructor() {
        super();
        // query for the last commited versions only
        this.setQueryRootField({
            field: "next",
            context: "version",
            op: "="
        });
    }
    
}