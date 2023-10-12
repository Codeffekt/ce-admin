import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AccountSettings } from '@codeffekt/ce-core-data';
import { AccountEditorService } from '../../services/account-editor.service';

@Component({
  selector: 'ce-admin-user-json',
  templateUrl: './user-json.component.html',
  styleUrls: ['./user-json.component.scss']
})
export class UserJsonComponent implements OnInit {

  @Input() account!: AccountSettings;
  @Output() accountChanges = new EventEmitter<AccountSettings>();

  code!: string;

  constructor(
    private accountEditorService: AccountEditorService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.code = JSON.stringify(this.account, null, 2);
  }

  doSave(account: AccountSettings) {
    this.save(account).then(_ => this.notifySuccess());
  }

  async save(accountSettings: AccountSettings) {
    if (!this.account.id) {
      const newAccount = await this.accountEditorService.createAccount(this.account);
      this.accountChanges.emit(newAccount);
      return newAccount;
    } else {
      const account = await this.accountEditorService.updateAccount(accountSettings);
      this.accountChanges.emit(account);
      return account;
    }
  }

  private notifySuccess() {
    this.snackBar.open("Modifications sauvegardées", "", {
      duration: 2000
    });
  }
}
