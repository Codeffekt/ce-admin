import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { AppRunnerService } from "../../services/app-runner.service";

@Injectable({
    providedIn: 'root'
})
export class AppFormGuard implements CanActivate {
    constructor(private readonly appRunnerService: AppRunnerService) { }

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        
        const formId = route.paramMap.get('formId');        

        if(!formId) {
            return false;
        }
        
        try {
            await this.appRunnerService.fetchProjectForm(formId);
        } catch(err) {            
            return false;
        }
        return true;
    }

    
}