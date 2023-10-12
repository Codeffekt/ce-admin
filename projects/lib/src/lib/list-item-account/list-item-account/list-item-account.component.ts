import { Component, Input, OnInit } from '@angular/core';
import { FormAccountWrapper } from '@codeffekt/ce-core-data';

@Component({
  selector: 'lib-list-item-account',
  templateUrl: './list-item-account.component.html',
  styleUrls: ['./list-item-account.component.scss']
})
export class ListItemAccountComponent implements OnInit {

  @Input() item!: FormAccountWrapper;

  constructor() { }

  ngOnInit(): void {
  }
}
