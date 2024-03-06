import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { AppRunnerService } from "../../../services/app-runner.service";

@Injectable({
    providedIn: 'root'
})
export class ProjectFormsGuard  {
    constructor(private readonly appRunnerService: AppRunnerService) { }

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        
        const assocId = route.paramMap.get('assocId');
        if(!assocId) {
            return false;
        }
        
        try {
            await this.appRunnerService.fetchProjectAssoc(assocId);
        } catch(err) {
            return false;
        }        

        return true;
    }

    
}