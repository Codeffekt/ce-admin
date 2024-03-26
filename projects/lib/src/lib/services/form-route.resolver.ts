import { Injectable } from "@angular/core";
import { CeFormRouteParams, ICeFormRouteResolver } from "@codeffekt/ce-core";
import { FormInstance, IndexType } from "@codeffekt/ce-core-data";

@Injectable({
    providedIn: 'root'
})
export class FormRouteResolver implements ICeFormRouteResolver {
    resolve(formField: string, formId: IndexType, formInstance: FormInstance): CeFormRouteParams {
        return { route: ['/home/forms/forms', formId], isRelativeRoute: false };
    }
}