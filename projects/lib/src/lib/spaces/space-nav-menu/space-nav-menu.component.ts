import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CeFormRouteResolver, CeFormsPipesModule, FormInfo, SpaceFormPathService } from '@codeffekt/ce-core';

@Component({
  selector: 'lib-space-nav-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    CeFormsPipesModule,
  ],
  templateUrl: './space-nav-menu.component.html',
  styleUrls: ['./space-nav-menu.component.css']
})
export class SpaceNavMenuComponent {

  private formService = inject(SpaceFormPathService);
  private formRouteResolver = inject(CeFormRouteResolver);
  currentForm$ = this.formService.onCurrentForm();
  currentForms$ = this.formService.onCurrentForms();

  onGoElt(form: FormInfo) {
    this.formRouteResolver.navigate(form.form.core.id, form.form.core);
}
}
