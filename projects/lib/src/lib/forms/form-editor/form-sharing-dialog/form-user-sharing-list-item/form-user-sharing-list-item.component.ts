import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CeAccountService, IListItemContent } from '@codeffekt/ce-core';
import { AccountSettings, FormSharingWrapper } from '@codeffekt/ce-core-data';

@Component({
  selector: 'ce-form-user-sharing-list-item',
  templateUrl: './form-user-sharing-list-item.component.html',
  styleUrls: ['./form-user-sharing-list-item.component.scss']
})
export class FormUserSharingListItemComponent implements OnInit, IListItemContent {

  @Input() item!: FormSharingWrapper;
  @Output() itemChangedEvent = new EventEmitter<boolean>();

  account?: AccountSettings;

  constructor(private accountService: CeAccountService) { }

  ngOnInit(): void {
    this.updateAccount();
  }

  onDelete() {
    this.itemChangedEvent.next(true);
  }

  private updateAccount() {
    this.account = this.accountService.getMemberFromLogin(this.item.props.login);
  }
}
