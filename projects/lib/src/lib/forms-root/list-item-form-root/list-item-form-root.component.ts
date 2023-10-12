import { Component, Input, OnInit } from '@angular/core';
import { FormRoot } from '@codeffekt/ce-core-data';

@Component({
  selector: 'lib-list-item-form-root',
  templateUrl: './list-item-form-root.component.html',
  styleUrls: ['./list-item-form-root.component.scss']
})
export class ListItemFormRootComponent implements OnInit {

  @Input() item!: FormRoot;

  constructor() { }

  ngOnInit(): void {
  }

}
