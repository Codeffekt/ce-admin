import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormWrapper } from '@codeffekt/ce-core-data';

@Component({
  selector: 'lib-user-topbar',
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css']
})
export class UserTopbarComponent {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  constructor(
    private router: Router,
  ) {}

  createUser() {
    this.router.navigate(['/users/new']);
  }
}
