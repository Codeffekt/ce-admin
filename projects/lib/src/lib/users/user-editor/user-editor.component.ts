import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountSettings } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AccountEditorService } from '../../services/account-editor.service';
import { LayoutService } from '@codeffekt/ce-core';

@Component({
  selector: 'lib-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent implements OnInit {

  account$!: Observable<AccountSettings>;
  error$!: Observable<boolean>;

  accountValid!: boolean;
  accountValidity$!: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private layout: LayoutService,
    private accountEditorService: AccountEditorService
  ) { }

  ngOnInit() {
    this.listenAccount();
  }

  private listenAccount() {
    this.account$ = this.route.paramMap
      .pipe(
        map(params => params.get("account")),
        switchMap(accountId => this.accountEditorService.fetchAccount(accountId))
      );

    this.error$ = this.account$.pipe(
      // TODO: PublicAccount getAccount should return error instead of {}
      map(account => Object.keys(account).length === 0)
    );
  }

  onSuccessEditing(account: AccountSettings) {

    this.layout.showSingleMessage(`Utilisateur ${account.login} mise à jour.`);
  }

  onFailedEditing(account: AccountSettings) {
    this.layout.showErrorMessage(`Erreur lors de la mise à jour de l'utilisateur ${account.login}`);
  }
}
