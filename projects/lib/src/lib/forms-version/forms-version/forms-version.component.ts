import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CeCoreService, CeFormQueryService, FormsFormQueryBuilder } from '@codeffekt/ce-core';
import { FormInstance } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { FormsVersionDataSource } from './forms-version-datasource';
import { FormsVersionFormQueryBuilder } from './forms-version-formquery.builder';

@Component({
  selector: 'lib-forms-version',
  templateUrl: './forms-version.component.html',
  styleUrls: ['./forms-version.component.scss'],
  providers: [
    CeFormQueryService
  ]
})
export class FormsVersionComponent implements OnInit {

  formsDataSource!: FormsVersionDataSource;
  forms$!: Observable<readonly FormInstance[]>;

  formQueryBuilder: FormsVersionFormQueryBuilder = new FormsVersionFormQueryBuilder();

  constructor(
    private readonly queryService: CeFormQueryService<FormInstance>,
    private router: Router,        
    private coreService: CeCoreService
  ) { 
    this.formsDataSource = new FormsVersionDataSource(this.coreService); 
    this.queryService.setDatasource(this.formsDataSource);    
  }

  ngOnInit() {    
    this.prepareQueryService();
  }  

  onSelected(form: FormInstance) {
    this.router.navigate(['formsversion', 'edit', form.id]);
  }  

  private async prepareQueryService() {
    this.queryService.setQueryBuilder(this.formQueryBuilder);
    this.queryService.setModel(null as any);
    this.forms$ = this.queryService.connect();
    this.queryService.load();
  }

}
