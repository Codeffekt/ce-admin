import { inject, Injectable } from "@angular/core";
import { FormRoot } from "@codeffekt/ce-core-data";
import { filter, map, Observable, switchMap } from "rxjs";
import { FormsRootSelectionDialogComponent } from "./forms-root-selection-dialog.component";
import { MatDialog } from "@angular/material/dialog";
import { CeFormsService } from "@codeffekt/ce-core";

@Injectable()
export class FormsRootSelectionDialogService {

    private dialog = inject(MatDialog);
    private formsService = inject(CeFormsService);

    open(): Observable<FormRoot[]> {        

        return FormsRootSelectionDialogComponent
            .open(this.dialog)
            .afterClosed()
            .pipe(
                filter(root => root !== undefined),
                switchMap(root => this.formsService.getFormWithDeps(root.core.id)),
                map(res => res.elts),
            );
    }

}