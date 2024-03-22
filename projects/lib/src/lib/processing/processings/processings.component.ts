import { Component, OnInit, inject } from '@angular/core';
import { CeFormQueryService, CeFormsService, FormWrappersDataSource } from '@codeffekt/ce-core';
import { FormWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { ProcessingsFormQueryBuilder } from './processings-formquery-builder';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-processings',
  templateUrl: './processings.component.html',
  styleUrls: ['./processings.component.css'],
  providers: [
    CeFormQueryService
  ]
})
export class ProcessingsComponent implements OnInit {

  processings$!: Observable<readonly FormWrapper[]>;

  private readonly queryService = inject(CeFormQueryService<FormWrapper>);

  constructor(
    private router: Router,
  ) {
    this.queryService.setDatasource(
      new FormWrappersDataSource(inject(CeFormsService))
    );
  }

  ngOnInit(): void {
    this.prepareQueryService();
  }

  createProcessing() {
    throw new Error('Method not implemented.');
  }

  onSelected(processing: FormWrapper) {
    this.router.navigate(['home', 'processings', 'edit', processing.core.id]);
  }

  delete(processing: FormWrapper) {
    
  }

  private async prepareQueryService() {
    this.queryService.setQueryBuilder(
      ProcessingsFormQueryBuilder.create()
    );
    this.processings$ = this.queryService.connect();
    this.queryService.load();
  }
}
