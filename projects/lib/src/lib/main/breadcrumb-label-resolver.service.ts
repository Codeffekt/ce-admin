/* import { Injectable } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class BreadcrumbLabelResolver {

    resolve(activatedRoute: ActivatedRoute): string {
        const data = activatedRoute.snapshot.data;

        if (data.useProject && data.project?.name) {
            return data.project.name;
        }

        return data.routeId;
    }

} */