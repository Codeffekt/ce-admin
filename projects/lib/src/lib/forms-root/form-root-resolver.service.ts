import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CeFormsService } from '@codeffekt/ce-core';
import { FormRoot } from '@codeffekt/ce-core-data';
import { firstValueFrom } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FormRootResolverService implements Resolve<FormRoot> {

    constructor(private formsService: CeFormsService) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<FormRoot> {
        const id = route.paramMap.get('form');

        if (!id) {
            throw new Error("route path variable form missing");
        }

        const root = await firstValueFrom(this.formsService.getFormRoot(id));

        if (!root) {
            throw new Error(`Root ${id} not found`);
        }

        return root;
    }
}
