import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { FormAccountWrapper } from '@codeffekt/ce-core-data';
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

  @Input() account!: FormAccountWrapper;
  @Output() accountChanges = new EventEmitter<FormAccountWrapper>();
  @Output() formValidityChanges = new EventEmitter<boolean>();
  @Output() succeed = new EventEmitter<FormAccountWrapper>();
  @Output() failed = new EventEmitter<FormAccountWrapper>();

  accountForm!: UntypedFormGroup;
  canSave$!: Observable<boolean>;

  private subscription!: Subscription;

  constructor(
    private fb: UntypedFormBuilder,
    private dialog: MatDialog,
    private accountEditorService: AccountEditorService) {
  }

  ngOnInit() {    
    this.createForm(this.account);
    this.listenAccountValidity();
  }

  /* ngOnChanges(changes: SimpleChanges) {
    if (changes.account) {
      this.createForm(this.account);
    }
  } */

  async save() {
    try {
      // An id has been found retrieved so we update the account
      this.account = await this.accountEditorService.updateAccount(this.account);
      this.notifyUserCreationSuccess(this.account);
    } catch (err) {
      this.notifyUserEditingFailed(this.account);
    }
  }

  /* onJSONAccountChanged(account: AccountSettings) {
    this.account = account;
  } */

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

  createAPIKey() {
    this.dialog
      .open(UserApiKeyComponent, UserApiKeyComponent.createDialog({
        account: this.account.core.id
      }));      
  }

  private async updatePassword(newPassword: string) {
    try {
      await this.accountEditorService.updateAccountPassword(this.account.core.id, newPassword);
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

  private createForm(account: FormAccountWrapper) {

    this.accountForm = this.fb.group({
      firstName: [account.props.firstName, [Validators.required]],
      lastName: [account.props.lastName, [Validators.required]],
      login: [account.props.login, [Validators.required]],
      email: [account.props.email, [Validators.required, Validators.email]],
      role: [account.props.role, [Validators.required]],
      lang: account.props.lang,
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
    this.account.props.firstName = this.accountForm.value.firstName;
    this.account.props.lastName = this.accountForm.value.lastName;
    this.account.props.login = this.accountForm.value.login;
    this.account.props.email = this.accountForm.value.email;
    this.account.props.role = this.accountForm.value.role;
    this.account.props.lang = this.accountForm.value.lang;
    this.account.fill();
    this.notifyAccountChanges();
    this.notifyMainInfoValidityChanges();
  }

  private notifyAccountChanges() {
    this.accountChanges.next(this.account);
  }

  private notifyMainInfoValidityChanges() {
    this.accountEditorService.updateValidity(this.accountForm.valid);
  }

  private notifyUserCreationSuccess(account: FormAccountWrapper) {
    this.succeed.next(account);
  }

  private notifyUserEditingFailed(account: FormAccountWrapper) {
    this.failed.next(account);
  }
}
