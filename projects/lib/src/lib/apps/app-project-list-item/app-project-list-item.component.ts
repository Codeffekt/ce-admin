import { Component, Input, OnInit } from '@angular/core';
import { FormProjectWrapper } from '@codeffekt/ce-core-data';
@Component({
  selector: 'lib-app-project-list-item',
  templateUrl: './app-project-list-item.component.html',
  styleUrls: ['./app-project-list-item.component.scss']
})
export class AppProjectListItemComponent implements OnInit {

  @Input() item!: FormProjectWrapper;

  constructor() { }

  ngOnInit(): void {
  }

}
