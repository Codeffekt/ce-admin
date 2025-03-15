import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInstance, FormInstanceExt, FormSpaceEditorFormatWrapper, FormUtils, FormWrapper, IndexType } from '@codeffekt/ce-core-data';
import { CeFormsPipesModule, CeFormsService, CeListModule, CePipesModule, FormQueryArrayBuilder } from '@codeffekt/ce-core';
import { filter, firstValueFrom, map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'lib-list-item-space',
    imports: [
        CommonModule,
        CeListModule,
        CePipesModule,
        CeFormsPipesModule,
        MatButtonModule,
    ],
    templateUrl: './list-item-space.component.html',
    styleUrls: ['./list-item-space.component.scss']
})
export class ListItemSpaceComponent implements OnInit {

  @Input() item!: FormSpaceEditorFormatWrapper;

  private formsService = inject(CeFormsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  entryPointFormIndex?: IndexType;

  ngOnInit(): void {
    this.entryPointFormIndex = this.retrieveEntryPoint();
  }

  onNavigate() {
    this.router.navigate(['entries', this.item.core.id], { relativeTo: this.route });
  }

  onEdit() {
    this.router.navigate(['editor', this.item.core.id], { relativeTo: this.route });
  }

  private retrieveEntryPoint() {
    const contextForm = FormUtils.getFormField("context", this.item.core);
    return FormWrapper.getFormValue("entryPoint", contextForm);
  }
}
