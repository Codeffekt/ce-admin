import { Component, Input, OnInit } from '@angular/core';
import { FormProjectWrapper } from '@codeffekt/ce-core-data';

@Component({
  selector: 'lib-list-item-project',
  templateUrl: './list-item-project.component.html',
  styleUrls: ['./list-item-project.component.scss']
})
export class ListItemProjectComponent implements OnInit {

  @Input() item!: FormProjectWrapper;

  constructor() { }

  ngOnInit(): void {
  }

}
