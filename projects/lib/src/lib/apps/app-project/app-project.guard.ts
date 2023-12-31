import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { AppRunnerService } from "../../services/app-runner.service";

@Injectable({
    providedIn: 'root'
})
export class AppProjectGuard implements CanActivate {
    constructor(private readonly appRunnerService: AppRunnerService) { }

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        
        const projectId = route.paramMap.get('projectId');        

        if(!projectId) {
            return false;
        }
        
        try {
            await this.appRunnerService.fetchAppProject(projectId);
        } catch(err) {            
            return false;
        }
        return true;
    }

    
}