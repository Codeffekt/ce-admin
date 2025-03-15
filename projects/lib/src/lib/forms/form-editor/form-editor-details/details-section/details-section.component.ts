import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'ce-details-section',
    templateUrl: './details-section.component.html',
    styleUrls: ['./details-section.component.scss'],
    standalone: false
})
export class DetailsSectionComponent implements OnInit {

  @Input() title!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
