import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { IndexType } from "@codeffekt/ce-core-data";
import { SpaceEntriesService } from "./space-entries.service";

@Injectable()
export class SpaceEntriesResolverService {
    constructor(
        private entriesService: SpaceEntriesService,
    ) { }

    async resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<IndexType> {
        const id = route.paramMap.get('form');

        if (id === null) {
            throw new Error(`Form cannot be null`);
        }

        await this.entriesService.setSpaceEntry(id);
        return id;
    }
}
