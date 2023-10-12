import { FormQueryBuilder } from "@codeffekt/ce-core";
import { FormQuerySortField } from "@codeffekt/ce-core-data";

export class AppsFormQueryBuilder extends FormQueryBuilder {

    constructor() {
        super();
        this.setQueryRootField({
            field: "root",
            op: "=",
            value: "forms-app"
        });
    }

    setFilter(filterValue: string) {
        if (filterValue === "") {
            this.clearQueryField("title");
        } else {
            this.setQueryField({
                field: "title",
                op: "~~*",
                value: `%${filterValue}%`
            });
        }
    }

    setSort(sortField: FormQuerySortField) {        
        this.clearRootSort();
        this.setRootSort(sortField);        
    }
}