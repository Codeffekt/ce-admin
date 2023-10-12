import { CeFormsService, FormQueryDatasource } from "@codeffekt/ce-core";
import { DbArrayRes, FormAccountWrapper, FormInstanceExt, FormQuery } from "@codeffekt/ce-core-data";
import { Observable } from "rxjs";
export class UsersDataSource extends FormQueryDatasource<FormAccountWrapper> {

    constructor(
        private formsService: CeFormsService
    ) {
        super();
    }

    protected queryDb(query: FormQuery): Observable<DbArrayRes<FormInstanceExt>> {
        return this.formsService.getRawFormsQuery(query);
    }

    protected wrap(form: FormInstanceExt): FormAccountWrapper {
        return new FormAccountWrapper(form);
    }
}