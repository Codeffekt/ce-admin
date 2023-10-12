import { CeFormsService, FormQueryDatasource } from "@codeffekt/ce-core";
import { DbArrayRes, FormInstance, FormQuery, FormRoot } from "@codeffekt/ce-core-data";
import { Observable } from "rxjs";

export class FormsRootDataSource extends FormQueryDatasource<FormRoot, FormRoot> {
    constructor(
        private formsService: CeFormsService
    ) {
        super();
    }

    protected queryDb(query: FormQuery): Observable<DbArrayRes<FormRoot>> {
        return this.formsService.getRawFormsRootQuery(query);
    }

    protected wrap(form: FormInstance): FormRoot {
        return form;
    }
}