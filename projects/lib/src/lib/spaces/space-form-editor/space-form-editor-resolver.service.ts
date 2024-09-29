import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { IndexType } from "@codeffekt/ce-core-data";
import { SpaceFormPathService } from "./space-form-path.service";

@Injectable()
export class SpaceFormPathResolverService {
    constructor(
        private pathService: SpaceFormPathService,
    ) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IndexType> {
        const id = route.paramMap.get('formPath');

        if (id === null) {
            throw new Error(`FormPath cannot be null`);
        }

        this.pathService.setCurrentPath(id);
        return id;
    }
}
