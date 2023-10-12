import { CeAdminRouteActions, CeAdminRouteParams, CeAdminRouteResolver } from "./ce-admin-route.resolver";


const ACTIONS_ROUTES: Record<CeAdminRouteActions, (id?: string, pid?: string) => CeAdminRouteParams> = {
    "forms": () => ({
        route: ["forms"]    
    }),
    "forms.edit": (id?: string) => ({
        route: ["forms", "edit", id]    
    }),
    "forms.new": () => ({
        route: ["forms", "new"]
    }),
    "formsroot": () => ({
        route: ["formsroot"]    
    }),
    "formsroot.edit": (id?: string) => ({
        route: ["formsroot", "edit", id]
    }),
    "formsroot.new": () => ({
        route: ["formsroot", "new"]
    }),
    "formsversion": () => ({
        route: ["formsversion"]
    })
};

export class CeAdminDefaultRouteResolver implements CeAdminRouteResolver {

    resolve(action: CeAdminRouteActions, id?: string, pid?: string): CeAdminRouteParams {
        return ACTIONS_ROUTES[action](id, pid);
    }

}