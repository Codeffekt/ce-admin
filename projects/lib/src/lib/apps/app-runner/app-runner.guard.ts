import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { AppRunnerService } from "../../services/app-runner.service";

@Injectable({
    providedIn: 'root'
})
export class AppRunnerGuard  {
    constructor(private readonly appRunnerService: AppRunnerService) { }

    async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
        const appId = route.paramMap.get('appId');
        if(!appId) {
            return false;
        }

        try {
            await this.appRunnerService.fetchCurrentApp(appId);
        } catch(err) {
            return false;
        }
        return true;
    }
}