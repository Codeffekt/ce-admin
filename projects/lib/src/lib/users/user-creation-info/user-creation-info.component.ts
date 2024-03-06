import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AccountSettings } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { debounceTime, tap } from 'rxjs';
import { AccountEditorService } from '../../services/account-editor.service';
import { UserValidators } from '../user-validators';

@UntilDestroy()
@Component({
  selector: 'ce-user-creation-info',
  templateUrl: './user-creation-info.component.html',
  styleUrls: ['./user-creation-info.component.css']
})
export class UserCreationInfoComponent implements OnInit {

  @Output() succeed = new EventEmitter<AccountSettings>();
  @Output() failed = new EventEmitter<AccountSettings>();

  accountForm!: UntypedFormGroup;
  account!: AccountSettings;

  constructor(
    private fb: UntypedFormBuilder,
    private accountEditorService: AccountEditorService) {
    this.account = this.accountEditorService.createEmptyAccount();
  }

  ngOnInit(): void {
    this.createForm();
  }

  async save() {
    try {
      const newAccount = await this.accountEditorService.createAccount(this.account);
      this.notifyUserCreationSuccess(newAccount);
    } catch (err) {
      this.notifyUserCreationFailed(this.account);
    }
  }

  private createForm() {

    this.accountForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      login: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      passwd: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],
      role: [null, [Validators.required]],
      lang: null,
      suggestions: '',
    }, {
      validator: [UserValidators.MatchPassword]
    });

    this.observeFormChanges();
  }

  private observeFormChanges() {
    this.accountForm.valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(_ => this.onFormUpdated());
  }

  private onFormUpdated() {
    this.account.firstName = this.accountForm.value.firstName;
    this.account.lastName = this.accountForm.value.lastName;
    this.account.login = this.accountForm.value.login;
    this.account.email = this.accountForm.value.email;
    this.account.role = this.accountForm.value.role;
    this.account.lang = this.accountForm.value.lang;
    this.account.passwd = this.accountForm.value.passwd;
  }

  private notifyUserCreationSuccess(account: AccountSettings) {
    this.succeed.next(account);
  }

  private notifyUserCreationFailed(account: AccountSettings) {
    this.failed.next(account);
  }
}