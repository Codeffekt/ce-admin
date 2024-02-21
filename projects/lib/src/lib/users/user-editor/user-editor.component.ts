import { Component, EventEmitter } from '@angular/core';
import { FormAccountWrapper } from '@codeffekt/ce-core-data';
import { Observable } from 'rxjs';
import { LayoutService } from '@codeffekt/ce-core';

@Component({
  selector: 'lib-user-editor',
  templateUrl: './user-editor.component.html',
  styleUrls: ['./user-editor.component.scss']
})
export class UserEditorComponent {

  formWrapper!: FormAccountWrapper;  
  accountValid!: boolean;
  accountValidity$!: Observable<boolean>;
  formChanges = new EventEmitter<boolean>();

  constructor(    
    private layout: LayoutService  ) {
    // this.listenAccount();
  }  

  private listenAccount() {
   /*  this.account$ = this.route.data
      .pipe(
        map(resolves => resolves.account),
      );     */
  }

  onSuccessEditing(account: FormAccountWrapper) {
    this.layout.showSingleMessage(`Utilisateur ${account.props.login} mise à jour.`);
  }

  onFailedEditing(account: FormAccountWrapper) {
    this.layout.showErrorMessage(`Erreur lors de la mise à jour de l'utilisateur ${account.props.login}`);
  }
}
