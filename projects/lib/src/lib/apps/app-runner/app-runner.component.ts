import { Component, OnInit } from '@angular/core';
import { FormWrapper } from '@codeffekt/ce-core-data';
import { AppRunnerService } from '../../services/app-runner.service';

@Component({
  selector: 'lib-app-runner',
  templateUrl: './app-runner.component.html',
  styleUrls: ['./app-runner.component.scss']
})
export class AppRunnerComponent implements OnInit {

  currentApp!: FormWrapper;

  constructor(private readonly appRunnerService: AppRunnerService) { 
    this.currentApp = this.appRunnerService.getCurrentApp()!;
  }

  ngOnInit(): void {
  }

}
