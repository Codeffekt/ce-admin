import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CeFormQueryService, CeFormQueryWrapperModule, CeFormsService,
  CeListModule,
  CeNgReallyModule,
  FormsFormQueryBuilder
} from '@codeffekt/ce-core';
import { FormsRootDataSource } from '../forms-root/forms-root-datasource';
import { Observable } from 'rxjs';
import { FormWrapper } from '@codeffekt/ce-core-data';

@Component({
  selector: 'lib-forms-root-selection',
  standalone: true,
  imports: [
    CommonModule,
    CeFormQueryWrapperModule,
    CeListModule,
    CeNgReallyModule,
  ],
  templateUrl: './forms-root-selection.component.html',
  styleUrls: ['./forms-root-selection.component.css'],
  providers: [
    CeFormQueryService,    
  ]
})
export class FormsRootSelectionComponent implements OnInit {

  @Output() selectionChanges = new EventEmitter<FormWrapper>();

  formsDataSource!: FormsRootDataSource;
  formQueryBuilder = new FormsFormQueryBuilder();
  forms$!: Observable<readonly FormWrapper[]>;
  currentSelection: FormWrapper|undefined;

  constructor(
    private readonly queryService: CeFormQueryService<FormWrapper>,
    private formsService: CeFormsService,
  ) {
    this.formsDataSource = new FormsRootDataSource(this.formsService);
    this.queryService.setDatasource(this.formsDataSource);
  }  

  ngOnInit() {
    this.prepareQueryService();
  }

  onSelect(form: FormWrapper) {
    this.currentSelection = form;
    this.selectionChanges.emit(form);
  }  

  private async prepareQueryService() {
    this.queryService.setQueryBuilder(this.formQueryBuilder);
    this.forms$ = this.queryService.connect();
    this.queryService.load();
  }
}
