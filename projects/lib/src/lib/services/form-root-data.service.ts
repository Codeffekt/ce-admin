import { Injectable } from "@angular/core";
import { CeFormsService, ICeFormDataService } from "@codeffekt/ce-core";
import { DbArrayRes, FormInstance, FormInstanceExt, FormQuery, IndexType } from "@codeffekt/ce-core-data";
import { Observable, of } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class FormRootDataService implements ICeFormDataService {

    constructor(private apiService: CeFormsService) { }  

    getForm(root: string, formQuery: FormQuery): Observable<DbArrayRes<FormInstanceExt>> {
        return of({
            elts: [],
            total: 0,
            limit: 0,
            offset: 0
        });
    }

    createFormArrayElt(formArrayField: string, formIndex: IndexType): Promise<FormInstance> {
        throw new Error(`Not implemented for formroot`);        
    }

    deleteFormArrayElt(formId: IndexType): Promise<void> {
        throw new Error(`Not implemented for formroot`);      
    }

    addFormAssocElts(formId: string, elts: string[], field?: string): Promise<boolean> {
        throw new Error(`Not implemented for formroot`);       
    }
    
    removeFormAssocElts(formId: string, elts: string[], field?: string): Promise<boolean> {
        throw new Error(`Not implemented for formroot`);       
    }   
}