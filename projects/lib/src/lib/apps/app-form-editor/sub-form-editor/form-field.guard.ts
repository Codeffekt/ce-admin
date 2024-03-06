import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { AppRunnerService } from "../../../services/app-runner.service";

@Injectable({
    providedIn: 'root'
})
export class FormFieldGuard  {
    constructor(private readonly appRunnerService: AppRunnerService) { }

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
                
        const fieldId = route.paramMap.get('fieldId');        

        if(!fieldId) {
            return false;
        }
        
        try {
            await this.appRunnerService.fetchSubForm(fieldId);
        } catch(err) {            
            return false;
        }
        return true;
    }

    
}