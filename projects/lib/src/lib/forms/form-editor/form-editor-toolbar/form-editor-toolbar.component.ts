import { Component, Input, OnInit } from '@angular/core';
import { FormEditorLayoutService } from '../form-editor-layout.service';
import { FormInstance } from '@codeffekt/ce-core-data';
import { FormEditorOperationsService } from '../form-editor-operation.service';

@Component({
  selector: 'ce-form-editor-toolbar',
  templateUrl: './form-editor-toolbar.component.html',
  styleUrls: ['./form-editor-toolbar.component.scss']
})
export class FormEditorToolbarComponent implements OnInit {

  @Input() form!: FormInstance;

  constructor(
    private formEditorLayoutService: FormEditorLayoutService,
    private formEditorOperationsService: FormEditorOperationsService
  ) { }

  ngOnInit(): void {
  }

  toggleDetailsPanel() {
    this.formEditorLayoutService.toggleDetailsPanel();
  }

  remove() {
    this.formEditorOperationsService.removeForm(this.form);
  }

  upgradeForm() {
    this.formEditorOperationsService.upgradeForm(this.form);
  }

  addSharing() {
    this.formEditorOperationsService.addSharing(this.form);
  }
}
