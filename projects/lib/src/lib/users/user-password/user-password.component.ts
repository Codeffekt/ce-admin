import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { UserValidators } from '../user-validators';

@Component({
  selector: 'ce-user-password',
  templateUrl: './user-password.component.html',
  styleUrls: ['./user-password.component.scss']
})
export class UserPasswordComponent {

  form!: FormGroup;

  static createDialog(): MatDialogConfig {
    return {
      width: "350px",
    };
  }

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<UserPasswordComponent>,) {
    this.createForm();
  }


  dismiss() {
    this.dialogRef.close(null)
  }

  onSubmit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value.passwd);
    }
  }

  private createForm() {
    this.form = this.formBuilder.group({
      passwd: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: [UserValidators.MatchPassword]
    });
  }
}
