import { Component, Input, OnInit } from '@angular/core';
import { FormInstance } from '@codeffekt/ce-core-data';

@Component({
  selector: 'lib-list-item-form-version',
  templateUrl: './list-item-form-version.component.html',
  styleUrls: ['./list-item-form-version.component.scss']
})
export class ListItemFormVersionComponent implements OnInit {

  @Input() item!: FormInstance;

  constructor() { }

  ngOnInit(): void {
  }

}
