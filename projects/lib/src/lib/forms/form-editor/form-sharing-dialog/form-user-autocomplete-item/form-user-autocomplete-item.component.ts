import { Component, Input, OnInit } from '@angular/core';
import { FormWrapper } from '@codeffekt/ce-core-data';
import { IFormAutocompleteItemContent } from "@codeffekt/ce-core";

@Component({
  selector: 'app-form-user-autocomplete-item',
  templateUrl: './form-user-autocomplete-item.component.html',
  styleUrls: ['./form-user-autocomplete-item.component.scss']
})
export class FormUserAutocompleteItemComponent implements OnInit, IFormAutocompleteItemContent {

  @Input() item!: FormWrapper;

  constructor() { }

  ngOnInit(): void { }
}
