import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { AppRunnerService } from "../../services/app-runner.service";

@Injectable({
    providedIn: 'root'
})
export class AppConfigGuard  {
    constructor(private readonly appRunnerService: AppRunnerService) { }

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {            
        
        try {
            await this.appRunnerService.fetchAppConfig();
        } catch(err) {            
            return false;
        }
        return true;
    }

    
}