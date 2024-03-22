import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { CeFormsService } from "@codeffekt/ce-core";
import { FormInstanceExt } from "@codeffekt/ce-core-data";
import { firstValueFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProcessingResolverService {

    constructor(private formsService: CeFormsService) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<FormInstanceExt> {
        const id = route.paramMap.get('form');

        if (!id) {
            throw new Error("route path variable form missing");
        }

        const form = await firstValueFrom(this.formsService.getRawFormQuery(id, { extMode: true}));

        if(!form) {
            throw new Error(`Form ${id} not found`);
        }

        return form;
    }
}