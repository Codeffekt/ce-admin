import { Component, Input, OnInit } from '@angular/core';
import { IListItemContent } from '@codeffekt/ce-core';
import { FormAccountWrapper } from '@codeffekt/ce-core-data';

@Component({
    selector: 'lib-list-item-account',
    templateUrl: './list-item-account.component.html',
    styleUrls: ['./list-item-account.component.scss'],
    standalone: false
})
export class ListItemAccountComponent implements OnInit, IListItemContent {

  @Input() item!: FormAccountWrapper;

  constructor() { }

  ngOnInit(): void {
  }
}
