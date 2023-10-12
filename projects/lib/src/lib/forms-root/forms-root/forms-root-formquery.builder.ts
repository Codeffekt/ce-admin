import { FormQueryBuilder } from "@codeffekt/ce-core";
import { FormQuerySortField } from "@codeffekt/ce-core-data";

export class FormsRootFormQueryBuilder extends FormQueryBuilder {    

    constructor() {
        super();
    }

    setSort(sortField: FormQuerySortField) {        
        this.clearRootSort();
        this.setRootSort(sortField);        
    }

    setFilter(filterValue: string) {
        if (filterValue === "") {
            this.clearQueryRootField("id");
        } else {
            this.setQueryRootField({
                field: "id",
                op: "~~*",
                value: `%${filterValue}%`
            });
        }
    }
}