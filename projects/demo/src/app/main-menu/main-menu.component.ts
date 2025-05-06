import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CeSideMenuModule } from '@codeffekt/ce-core';
import { FormWrapper } from '@codeffekt/ce-core-data';

@Component({
    selector: 'demo-main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.css'],   
    imports: [
      CommonModule,
      CeSideMenuModule,
      RouterModule,
    ]
})
export class MainMenuComponent {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

}
