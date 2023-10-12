import { InjectionToken } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

export const CE_ADMIN_ROUTE_RESOLVER = new InjectionToken<string>('ce.admin.route.resolver');

export type CeAdminRouteParams = {
    route: any[];
    relativeRoute?: ActivatedRoute;
}

export type CeAdminRouteActions = "forms"|"forms.new"|"formsroot"|"formsroot.new"|"forms.edit"|"formsroot.edit"|"formsversion";

export interface CeAdminRouteResolver {
    resolve(action: CeAdminRouteActions, id?: string, pid?: string): CeAdminRouteParams;
}

