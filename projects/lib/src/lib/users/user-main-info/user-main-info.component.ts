import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AccountSettings } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable, Subscription, debounceTime, filter, startWith, tap } from 'rxjs';
import { AccountEditorService } from '../../services/account-editor.service';
import { UserPasswordComponent } from '../user-password/user-password.component';
import { UserValidators } from '../user-validators';
import { UserApiKeyComponent } from '../user-api-key/user-api-key.component';

@UntilDestroy()
@Component({
  selector: 'ce-admin-user-main-info',
  templateUrl: './user-main-info.component.html',
  styleUrls: ['./user-main-info.component.scss']
})
export class UserMainInfoComponent implements OnInit {

  @Input() account!: AccountSettings;
  @Output() accountChanges = new EventEmitter<AccountSettings>();
  @Output() formValidityChanges = new EventEmitter<boolean>();
  @Output() succeed = new EventEmitter<AccountSettings>();
  @Output() failed = new EventEmitter<AccountSettings>();

  accountForm!: FormGroup;
  canSave$!: Observable<boolean>;

  private subscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private accountEditorService: AccountEditorService) {
  }

  ngOnInit() {
    this.listenAccountValidity();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.account) {
      this.createForm(this.account);
    }
  }

  async save() {
    try {
      // An id has been found retrieved so we update the account
      this.account = await this.accountEditorService.updateAccount(this.account);
      this.notifyUserCreationSuccess(this.account);
    } catch (err) {
      this.notifyUserEditingFailed(this.account);
    }
  }

  createAPIKey() {
    this.dialog
      .open(UserApiKeyComponent, UserApiKeyComponent.createDialog({
        account: this.account.id
      }));      
  }

  onJSONAccountChanged(account: AccountSettings) {
    this.account = account;
  }

  editPassword() {
    this.dialog
      .open(UserPasswordComponent, UserPasswordComponent.createDialog())
      .afterClosed()
      .pipe(
        filter(newPassword => !!newPassword)
      )
      .subscribe(newPassword => {
        this.updatePassword(newPassword);
      });
  }

  private async updatePassword(newPassword: string) {
    try {
      await this.accountEditorService.updateAccountPassword(this.account.id, newPassword);
      this.notifyUserCreationSuccess(this.account);
    } catch(err) {
      this.notifyUserEditingFailed(this.account);
    }
  }

  private listenAccountValidity() {
    this.canSave$ = this.accountEditorService.observeAccountValidityChanges().pipe(
      startWith(false)
    );
  }

  private createForm(account: AccountSettings) {

    this.accountForm = this.fb.group({
      firstName: [account.firstName, [Validators.required]],
      lastName: [account.lastName, [Validators.required]],
      login: [account.login, [Validators.required]],
      email: [account.email, [Validators.required, Validators.email]],
      role: [account.role, [Validators.required]],
      lang: account.lang,
      suggestions: '',
    }, {
      validator: [UserValidators.MatchPassword]
    });

    this.observeFormChanges();
    this.notifyMainInfoValidityChanges();
  }

  private observeFormChanges() {

    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    this.subscription = this.accountForm.valueChanges
      .pipe(
        untilDestroyed(this),
        tap(_ => this.onFormUpdated()),
        debounceTime(1500)
      )
      .subscribe(_ => this.save());
  }

  private onFormUpdated() {
    this.account.firstName = this.accountForm.value.firstName;
    this.account.lastName = this.accountForm.value.lastName;
    this.account.login = this.accountForm.value.login;
    this.account.email = this.accountForm.value.email;
    this.account.role = this.accountForm.value.role;
    this.account.lang = this.accountForm.value.lang;

    this.notifyAccountChanges();
    this.notifyMainInfoValidityChanges();
  }

  private notifyAccountChanges() {
    this.accountChanges.next(this.account);
  }

  private notifyMainInfoValidityChanges() {
    this.accountEditorService.updateValidity(this.accountForm.valid);
  }

  private notifyUserCreationSuccess(account: AccountSettings) {
    this.succeed.next(account);
  }

  private notifyUserEditingFailed(account: AccountSettings) {
    this.failed.next(account);
  }
}
