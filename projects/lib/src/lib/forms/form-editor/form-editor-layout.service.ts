import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface FormEditorLayoutConfig {
    showDetails: boolean;
}

const DEFAULT_FORM_EDITOR_LAYOUT_CONFIG: FormEditorLayoutConfig = {
    showDetails: true
};

@Injectable()
export class FormEditorLayoutService {

    private config$ = new BehaviorSubject<FormEditorLayoutConfig>(DEFAULT_FORM_EDITOR_LAYOUT_CONFIG);

    constructor() { }

    toggleDetailsPanel() {
        this.updateConfig({ showDetails: !this.config$.value.showDetails })
    }

    closeDetailsPanel() {
        this.updateConfig({ showDetails: false });
    }

    openDetailsPanel() {
        this.updateConfig({ showDetails: true });
    }

    configChanges(): Observable<FormEditorLayoutConfig> {
        return this.config$;
    }

    private updateConfig(config: Partial<FormEditorLayoutConfig>) {
        this.config$.next({ ...this.config$.value, ...config });
    }
}