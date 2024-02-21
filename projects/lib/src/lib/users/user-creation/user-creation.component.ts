import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from '@codeffekt/ce-core';
import { AccountSettings } from '@codeffekt/ce-core-data';

@Component({
  selector: 'lib-user-creation',
  templateUrl: './user-creation.component.html',
  styleUrls: ['./user-creation.component.css']
})
export class UserCreationComponent {

  constructor(
    private router: Router,
    private layout: LayoutService) { }

  onUserCreated(account: AccountSettings) {
    this.layout.showSingleMessage(`Nouvel utilisateur ${account.login} créé`);
    this.routeToAccount(account);

  }

  onUserCreationFailed(account: AccountSettings) {
    this.layout.showErrorMessage(`Erreur lors de la création d'un nouvel utilisateur`);
  }

  private routeToAccount(account: AccountSettings) {
    this.router.navigate([`/forms/edit/${account.id}`]);
  }
}