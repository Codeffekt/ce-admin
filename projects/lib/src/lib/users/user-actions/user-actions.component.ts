import { Component, Input, OnInit } from '@angular/core';
import { AccountSettings } from '@codeffekt/ce-core-data';

@Component({
  selector: 'ce-admin-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnInit {

  @Input() account!: AccountSettings;
  appsDataSource: any[] = [];
  displayedColumns: string[] = ['app_name', 'app_permissions'];

  constructor() { }

  ngOnInit() { }

  accountAuthResource(resource: string): string|undefined {
    if (this.account.authz && this.account.authz[resource]) {
      // TODO: Should check which value to take
      return this.account.authz[resource].actions[0];
    }
    return undefined;
  }

  onSelectionChanged(value: string, resource: string ) {
    if (!this.account.authz) {
      this.account.authz = {};
    }
    this.account.authz[resource] = {
      actions: [value]
    };
  }
}
