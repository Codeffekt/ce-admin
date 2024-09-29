import { Injectable } from "@angular/core";
import { CeFormRouteParams, ICeFormRouteResolver } from "@codeffekt/ce-core";
import { FormInstance, IndexType } from "@codeffekt/ce-core-data";

@Injectable({
    providedIn: 'root'
})
export class FormRouteResolver implements ICeFormRouteResolver {
    
    navigate(formId: IndexType, formInstance: FormInstance): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
    resolve(formField: string, formId: IndexType, formInstance: FormInstance): CeFormRouteParams {
        return { route: [formId], isRelativeRoute: true };
    }
}