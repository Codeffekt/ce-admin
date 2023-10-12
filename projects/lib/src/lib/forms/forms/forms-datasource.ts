import { Observable } from "rxjs";
import { FormInstance, FormQuery, DbArrayRes } from "@codeffekt/ce-core-data";
import { CeFormsService, FormQueryDatasource } from "@codeffekt/ce-core";

export class FormsDataSource extends FormQueryDatasource<FormInstance> {
    constructor(
        private formsService: CeFormsService
    ) {
        super();
    }

    protected queryDb(query: FormQuery): Observable<DbArrayRes<FormInstance>> {
        return this.formsService.getRawFormsQuery(query);
    }

    protected wrap(form: FormInstance): FormInstance {
        return form;
    }
}