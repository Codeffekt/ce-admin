import { Component, Input, OnInit } from '@angular/core';
import { FormWrapper } from '@codeffekt/ce-core-data';

@Component({
  selector: 'lib-app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.scss']
})
export class AppListItemComponent implements OnInit {

  @Input() item!: FormWrapper;

  constructor() { }

  ngOnInit(): void {
  }

}
