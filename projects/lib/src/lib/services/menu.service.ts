import { Inject, Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AccountAppActions } from '@codeffekt/ce-core-data';
import { CeAdminModuleConfig, CE_ADMIN_CONFIG, DEFAULT_CE_ADMIN_CONFIG } from '../ce-admin-config';
import { AuthZService } from './authz.service';

export interface CeAdminMenuEntry {
    label?: string;
    icon?: string;
    route: Route;
    fontIcon?: string;
    disabled?: boolean;
    authz?: { resource: string, actions: AccountAppActions[] };
    keepDefaultRoute?: boolean;
}

export interface CeActiveAdminMenuEntry {
    label: string;
    icon: string;
    fontIcon: string;
    route: Route;
}

@Injectable({ providedIn: 'root' })
export class CeAdminMenuService {

    readonly entries!: CeAdminMenuEntry[];
    readonly defaultRoutePath: string | undefined;

    constructor(
        private authzService: AuthZService,
        @Inject(CE_ADMIN_CONFIG) config: CeAdminModuleConfig
    ) {

        // Override menu entry's route 
        const customMenuEntries = config.menuEntries.map(entry => entry.keepDefaultRoute ? { ...entry, route: this.retrieveDefaultRoute(entry) } : entry );

        this.entries = [
            ...DEFAULT_CE_ADMIN_CONFIG.menuEntries
                .filter(elt => !customMenuEntries.find(newElt => newElt.route.path === elt.route.path)),
            ...customMenuEntries
        ];

        this.defaultRoutePath = config.defaultRoutePath;
    }

    private retrieveDefaultRoute(menuEntry: CeAdminMenuEntry) {
        return DEFAULT_CE_ADMIN_CONFIG.menuEntries.find(entry => entry.route.path === menuEntry.route.path)?.route ?? menuEntry.route;
    }

    static init(router: Router, menuService: CeAdminMenuService) {
        return () => {
            const config = [...router.config];
            const route = config.find((child) => child.data?.isRoot);

            if (!route) {
                throw new Error("Missing isRoot data in CeAdminModule router.");
            }

            const newEntries: CeAdminMenuEntry[] = menuService.defaultRoutePath ? [
                { route: { path: '', redirectTo: menuService.defaultRoutePath, pathMatch: 'full' } },
                ...menuService.entries
            ] : menuService.entries;

            const existingRoutes = route?.children || [];
            const oldRoutes = existingRoutes.filter(elt => !newEntries.find(newElt => elt.path === newElt.route.path));
            const newRoutes = [...oldRoutes, ...newEntries.filter(entry => !entry.disabled).map(entry => entry.route)];
            route.children = newRoutes;

            router.resetConfig(config);
        }
    }

    getActiveMenuEntries(): CeActiveAdminMenuEntry[] {
        return this.entries.filter(entry => !entry.disabled && entry.label && this.checkAuthzResources(entry)) as CeActiveAdminMenuEntry[];
    }

    private checkAuthzResources(menuEntry: CeAdminMenuEntry) {
        if (!menuEntry.authz) {
            return true;
        }

        return this.authzService.checkResourceActionsPermission(menuEntry.authz.resource, menuEntry.authz.actions);
    }
}