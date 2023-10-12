import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ce-details-prop',
  templateUrl: './details-prop.component.html',
  styleUrls: ['./details-prop.component.scss']
})
export class DetailsPropComponent implements OnInit {

  @Input() label!: string;
  @Input() value!: string;
  @Input() editable = false
  @Input() removable = false;
  @Output() edit = new EventEmitter();
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit(): void { }

  onEdit() {
    this.edit.emit();
  }

  onDelete(){
    this.remove.emit();
  }

}
