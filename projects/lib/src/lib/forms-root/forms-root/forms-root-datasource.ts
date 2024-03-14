import { CeFormsService, FormQueryDatasource } from "@codeffekt/ce-core";
import { DbArrayRes, FormInstance, FormQuery, FormRoot, FormWrapper } from "@codeffekt/ce-core-data";
import { Observable } from "rxjs";

export class FormsRootDataSource extends FormQueryDatasource<FormWrapper, FormRoot> {
    constructor(
        private formsService: CeFormsService
    ) {
        super();
    }

    protected queryDb(query: FormQuery): Observable<DbArrayRes<FormRoot>> {
        return this.formsService.getRawFormsRootQuery(query);
    }

    protected wrap(form: FormInstance): FormWrapper {
        return FormWrapper.fromForm(form);
    }
}