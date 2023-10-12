import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormProjectWrapper, FormWrapper } from '@codeffekt/ce-core-data';
import { AppRunnerService } from '../../services/app-runner.service';

interface MenuEntry {
  label: string;
  routerLink: string;
  icon: string;
}

@Component({
  selector: 'lib-app-project',
  templateUrl: './app-project.component.html',
  styleUrls: ['./app-project.component.scss']
})
export class AppProjectComponent implements OnInit {

  currentApp!: FormWrapper;
  project!: FormProjectWrapper;
  menuEntries: MenuEntry[] = [];

  constructor(
    private readonly appRunnerService: AppRunnerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.currentApp = this.appRunnerService.getCurrentApp()!;
    this.project = this.appRunnerService.getCurrentProject()!;
    this.updateMenuEntries();

    if (!this.appRunnerService.getCurrentAssoc()) {
      const formBlocks = this.project.getFormsBlocks();
      const assoc = formBlocks[0];
      this.router.navigate([assoc.field], { relativeTo: this.activatedRoute });
    }
  }

  ngOnInit(): void {
  }

  /* goForms(entry: MenuEntry) {
    this.router.navigate([entry.routerLink], { relativeTo: this.activatedRoute });
  } */

  private updateMenuEntries() {
    this.menuEntries = this.project.getFormsBlocks().map(block => ({
      label: block.field,
      routerLink: block.field,
      icon: "assignment"
    }));
  }
}
