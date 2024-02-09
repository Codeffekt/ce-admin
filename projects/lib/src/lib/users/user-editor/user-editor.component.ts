import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountSettings } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LayoutService } from '@codeffekt/ce-core';

@Component({
  selector: 'lib-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent {

  account$!: Observable<AccountSettings>;  
  accountValid!: boolean;
  accountValidity$!: Observable<boolean>;

  constructor(
    private route: ActivatedRoute,
    private layout: LayoutService  ) {
    this.listenAccount();
  }  

  private listenAccount() {
    this.account$ = this.route.data
      .pipe(
        map(resolves => resolves.account),
      );    
  }

  onSuccessEditing(account: AccountSettings) {

    this.layout.showSingleMessage(`Utilisateur ${account.login} mise à jour.`);
  }

  onFailedEditing(account: AccountSettings) {
    this.layout.showErrorMessage(`Erreur lors de la mise à jour de l'utilisateur ${account.login}`);
  }
}
