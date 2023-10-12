import { CeFormsService, FormQueryDatasource } from "@codeffekt/ce-core";
import { DbArrayRes, FormInstanceExt, FormQuery, FormSharingWrapper, FormWrapper } from "@codeffekt/ce-core-data";
import { Observable } from "rxjs";

export class FormSharingDatasource extends FormQueryDatasource<FormSharingWrapper> {

    constructor(private formsService: CeFormsService) {
        super();
    }

    protected queryDb(query: FormQuery): Observable<DbArrayRes<FormInstanceExt>> {
        return this.formsService.getRawFormsQuery({ ...query, extMode: true });
    }

    protected wrap(form: FormInstanceExt): FormSharingWrapper {
        return FormWrapper.fromForm(form);
    }

}