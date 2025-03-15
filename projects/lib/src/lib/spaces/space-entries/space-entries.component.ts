import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  CeFormQueryService, CeFormQueryWrapperModule,
  CeFormsPipesModule,
  CeFormsService, CeListModule,
  CeNavigationModule, CeNgReallyModule,
  FormQueryBuilder,
  FormWrappersDataSource,
  LayoutService
} from '@codeffekt/ce-core';
import { SpaceEntriesService } from './space-entries.service';
import { FormInstance, FormWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'lib-space-entries',
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        CeNavigationModule,
        CeFormQueryWrapperModule,
        CeListModule,
        CeNgReallyModule,
        CeFormsPipesModule,
    ],
    templateUrl: './space-entries.component.html',
    styleUrl: './space-entries.component.css',
    providers: [
        CeFormQueryService,
    ]
})
export class SpaceEntriesComponent implements OnInit {

  formsDataSource!: FormWrappersDataSource;
  forms$!: Observable<readonly FormWrapper[]>;

  spaceContextForm!: FormInstance;

  private formQueryBuilder = new FormQueryBuilder();

  private spaceEntriesService = inject(SpaceEntriesService);
  private queryService = inject(CeFormQueryService<FormWrapper>);
  private formsService = inject(CeFormsService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private layout = inject(LayoutService);

  constructor() {
    this.formsDataSource = new FormWrappersDataSource(this.formsService);
    this.queryService.setDatasource(this.formsDataSource);
    this.spaceContextForm = this.spaceEntriesService.getSpaceContext();
  }

  ngOnInit(): void {
    this.prepareQueryService();
  }

  onSelected(form: FormWrapper) {
    this.router.navigate(['../../form', form.core.id], { relativeTo: this.route });
  }

  async onCreateEntry() {
    try {
      const newForm = await this.formsService.createForm(this.spaceEntriesService.getSpaceEntry());
      this.layout.showSingleMessage(`Le formulaire de type ${newForm.root} à été créé.`);          
      this.router.navigate(['../../form', newForm.id], { relativeTo: this.route });
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la création d'un nouveau formulaire`);
    }
  }

  private async prepareQueryService() {
    this.formQueryBuilder.setRoot(this.spaceEntriesService.getSpaceEntry());
    this.queryService.setQueryBuilder(this.formQueryBuilder);    
    this.forms$ = this.queryService.connect();
    this.queryService.load();
  }
}
