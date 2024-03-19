import { InjectionToken } from "@angular/core";
import { CeAdminMenuEntry } from "..";

export const CE_ADMIN_CONFIG = new InjectionToken<CeAdminModuleConfig>('ce.admin.config');

export interface CeAdminModuleConfig {
    menuEntries: CeAdminMenuEntry[];
    defaultRoutePath?: string;
}

export const DEFAULT_CE_ADMIN_CONFIG: CeAdminModuleConfig = {
    menuEntries: [{
        route: {
            path: '',
            redirectTo: 'users',
            pathMatch: 'full'
        }
    }, {
        label: "Utilisateurs",
        icon: "assignment",
        route: {
            path: 'users',
            loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
        }
    }, {
        label: "Projets",
        icon: "assignment",
        route: {
            path: "projects",
            loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
        }
    }, {
        label: "Modèles de formulaires",
        icon: "assignment",
        route: {
            path: 'formsroot',
            loadChildren: () => import('./forms-root/forms-root.module').then(m => m.CeAdminRootModule)
        }
    }, {
        label: "Formulaires",
        icon: "assignment",
        route: {
            path: 'forms',
            loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule)
        }
    }, {
        label: "Media",
        icon: "assignment",
        route: {
            path: 'media',
            loadChildren: () => import('./media/media-projects.module').then(m => m.MediaProjectsModule)
        }
    }]
};

export const EMPTY_CE_ADMIN_CONFIG: CeAdminModuleConfig = {
    menuEntries: []
};