import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogConfig, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  CeFormQueryService, CeFormsService,
  FormQueryBuilder, FormWrappersDataSource
} from '@codeffekt/ce-core';
import { FormWrapper, IndexType } from '@codeffekt/ce-core-data';
import { map, Observable } from 'rxjs';

export interface FormSelectionConfig {
  filterForms: IndexType[];
  queryBuilder: FormQueryBuilder;
  mainTitle: string;
  listTitle: string;
}

@Component({
  selector: 'lib-form-selection-dialog',
  templateUrl: './form-selection-dialog.component.html',
  styleUrls: ['./form-selection-dialog.component.scss'],
  providers: [CeFormQueryService]
})
export class FormSelectionDialogComponent implements OnInit {

  static createDialog(data: FormSelectionConfig): MatDialogConfig {
    return {
      width: "800px",
      maxHeight: "80%",
      height: '1000px',
      data
    };
  }

  formsDataSource!: FormWrappersDataSource;
  forms$!: Observable<readonly FormWrapper[]>;
  currentSelection: FormWrapper | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FormSelectionConfig,
    private dialogRef: MatDialogRef<FormSelectionDialogComponent>,
    private queryService: CeFormQueryService<FormWrapper>,
    formsService: CeFormsService,
  ) {
    this.formsDataSource = new FormWrappersDataSource(formsService);
    queryService.setQueryBuilder(data.queryBuilder);
    queryService.setDatasource(this.formsDataSource);
    this.forms$ = queryService.connect().pipe(map(forms => this.filterForms(forms)));
  }

  ngOnInit(): void {
    this.queryService.load();
  }

  selectForm(currentSelection: FormWrapper) {
    this.currentSelection = currentSelection;
  }

  dismiss() {
    this.dialogRef.close();
  }

  submit() {
    this.dialogRef.close(this.currentSelection);
  }

  private filterForms(forms: readonly FormWrapper[]) {
    return forms
      .filter(form =>
        !this.data.filterForms.some(id => id === form.core.id));
  }
}
