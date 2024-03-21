import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormWrapper } from '@codeffekt/ce-core-data';

@Component({
  selector: 'demo-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

}
