import { CeCoreService, FormQueryDatasource } from "@codeffekt/ce-core";
import { DbArrayRes, FormInstance, FormQuery } from "@codeffekt/ce-core-data";
import { Observable } from "rxjs";

export class FormsVersionDataSource extends FormQueryDatasource<FormInstance> {
    constructor(
        private coreService: CeCoreService
    ) {
        super();
    }

    protected queryDb(query: FormQuery): Observable<DbArrayRes<FormInstance>> {
        return this.coreService.call("PublicFormsVersion", "getFormsQuery", query);
    }

    protected wrap(form: FormInstance): FormInstance {
        return form;
    }
}