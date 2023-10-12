/* import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { AppRunnerService } from "../../services/app-runner.service";

@Injectable({
    providedIn: 'root'
})
export class AppProjectsGuard implements CanActivate {
    constructor(private readonly appRunnerService: AppRunnerService) { }

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {        
        try {
            await this.appRunnerService.fetchAppProjects();
        } catch(err) {
            return false;
        }
        return true;
    }
} */