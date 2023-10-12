import { CeFormsService, FormQueryDatasource } from "@codeffekt/ce-core";
import { DbArrayRes, FormInstanceExt, FormProjectWrapper, FormQuery } from "@codeffekt/ce-core-data";
import { Observable } from "rxjs";

export class FormOwnedDatasource extends FormQueryDatasource<FormProjectWrapper> {

    constructor(private formsService: CeFormsService) {
        super();
    }

    protected queryDb(query: FormQuery): Observable<DbArrayRes<FormInstanceExt>> {
        return this.formsService.getRawFormsQuery({ ...query, extMode: true });
    }

    protected wrap(form: FormInstanceExt): FormProjectWrapper {
        return new FormProjectWrapper(form);
    }

}