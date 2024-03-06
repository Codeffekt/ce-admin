import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatLegacySnackBar as MatSnackBar } from '@angular/material/legacy-snack-bar';
import { AccountSettings, FormAccountWrapper, FormInstance } from '@codeffekt/ce-core-data';
import { AccountEditorService } from '../../services/account-editor.service';

@Component({
  selector: 'ce-admin-user-json',
  templateUrl: './user-json.component.html',
  styleUrls: ['./user-json.component.scss']
})
export class UserJsonComponent implements OnInit {

  @Input() account!: FormAccountWrapper;
  @Output() accountChanges = new EventEmitter<FormAccountWrapper>();

  code!: string;

  constructor(
    private accountEditorService: AccountEditorService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.code = JSON.stringify(this.account.core, null, 2);
  }

  doSave(account: FormInstance) {
    this.save(account).then(_ => this.notifySuccess());
  }

  async save(accountSettings: FormInstance) {
    /* if (!this.account.core.id) {
      const newAccount = await this.accountEditorService.createAccount(this.account);
      this.accountChanges.emit(newAccount);
      return newAccount;
    } else {
      const account = await this.accountEditorService.updateAccount(accountSettings);
      this.accountChanges.emit(account);
      return account;
    } */
    // this.account.update(accountSettings);
  }

  private notifySuccess() {
    this.snackBar.open("Modifications sauvegardées", "", {
      duration: 2000
    });
  }
}
