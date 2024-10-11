import { Component, inject, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormInstance, FormInstanceExt, FormSpaceEditorFormatWrapper, FormUtils } from '@codeffekt/ce-core-data';
import { CeFormsPipesModule, CeFormsService, CeListModule, CePipesModule, FormQueryArrayBuilder } from '@codeffekt/ce-core';
import { filter, firstValueFrom, map, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'lib-list-item-space',
  standalone: true,
  imports: [
    CommonModule,
    CeListModule,
    CePipesModule,
    CeFormsPipesModule,
    MatButtonModule,
  ],
  templateUrl: './list-item-space.component.html',
  styleUrls: ['./list-item-space.component.css']
})
export class ListItemSpaceComponent implements OnInit {

  @Input() item!: FormSpaceEditorFormatWrapper;

  private formsService = inject(CeFormsService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  entryPoint$!: Observable<FormInstanceExt>;

  ngOnInit(): void {
    this.retrieveEntryPoint();
  }

  onNavigate(form: FormInstanceExt) {
    this.router.navigate(['form', form.id], { relativeTo: this.route });
  }

  private retrieveEntryPoint() {

    const contextForm = FormUtils.getFormField("context", this.item.core);    
    const entryPointBlock = FormUtils.getBlockFromField(contextForm, "entryPoint");

    this.entryPoint$ = this.formsService.getRawFormsQuery(
      FormQueryArrayBuilder.fromBlock(entryPointBlock, contextForm).create()
    ).pipe(
      filter(res => res.elts.length > 0),
      map(res => res.elts[0])
    );

  }
}
