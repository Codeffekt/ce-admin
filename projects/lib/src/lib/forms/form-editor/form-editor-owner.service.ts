import { Injectable } from '@angular/core';
import { CeFormsService } from '@codeffekt/ce-core';
import { FormAccountWrapper, FormInstance, IndexType } from '@codeffekt/ce-core-data';
import { Subject, filter, map, startWith, switchMap } from 'rxjs';
import { FormSharingService } from '../../services/form-sharing.service';

@Injectable()
export class CeFormEditorOwnerService {

    private owner$: Subject<IndexType | undefined> = new Subject();

    constructor(
        private formsService: CeFormsService,
        public formSharingService: FormSharingService,
    ) { }

    async updateFormOwner(form: FormInstance, newOwner: FormAccountWrapper) {
        const updatedForm = await this.formsService.updateForm({
            ...form,
            author: newOwner.core.id
        });
        this.owner$.next(updatedForm.author);
    }

    listenToFormOwner(form: FormInstance) {
        return this.owner$.asObservable().pipe(
            startWith(form.author),
            filter(author => author !== undefined),
            switchMap(author => this.formsService.getForm(author!)),
            filter(form => form !== undefined),
            map(form => new FormAccountWrapper(form))
        );
    }
}