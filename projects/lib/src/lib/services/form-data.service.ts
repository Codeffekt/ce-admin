import { Injectable } from "@angular/core";
import { CeFormsService, ICeFormDataService } from "@codeffekt/ce-core";
import { DbArrayRes, FormInstance, FormInstanceExt, FormQuery, IndexType } from "@codeffekt/ce-core-data";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FormDataService implements ICeFormDataService {

    constructor(private apiService: CeFormsService) { }  

    getForm(root: string, formQuery: FormQuery): Observable<DbArrayRes<FormInstanceExt>> {             
        return this.apiService.getRawFormsQuery(formQuery);
    }

    createFormArrayElt(formArrayField: string, formIndex: IndexType): Promise<FormInstance> {
        throw new Error(`Not implemented for formroot`);    
    }

    deleteFormArrayElt(formId: IndexType): Promise<void> {
        throw new Error(`Not implemented for formroot`);    
    }

    addFormAssocElts(formId: string, elts: string[], field?: string): Promise<boolean> {        
        return this.apiService.rawFormMutation({
            type: "formAssoc",
            op: "add",
            ref: formId,
            formArrayField: field,
            indices: elts
        });
    }

    removeFormAssocElts(formId: string, elts: string[], field?: string): Promise<boolean> {        
        return this.apiService.rawFormMutation({
            type: "formAssoc",
            op: "delete",
            ref: formId,
            formArrayField: field,
            indices: elts
        });
    }    
}