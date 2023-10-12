import { Component, OnInit } from '@angular/core';
import { FormWrapper } from '@codeffekt/ce-core-data';
import { AppRunnerService } from '../../services/app-runner.service';

@Component({
  selector: 'lib-app-editor',
  templateUrl: './app-editor.component.html',
  styleUrls: ['./app-editor.component.scss']
})
export class AppEditorComponent implements OnInit {

  currentApp!: FormWrapper;

  constructor(private readonly appRunnerService: AppRunnerService) { 
    this.currentApp = this.appRunnerService.getCurrentApp()!;
  }

  ngOnInit(): void {
  }

}
