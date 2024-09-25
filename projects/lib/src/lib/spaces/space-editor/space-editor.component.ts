import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CeSpacesService, LayoutService, SpaceEditorInfo } from '@codeffekt/ce-core';
import {
  CeFormCreatorModule,
  ProjectFormat,
  RootSelectionDialogService
} from '@codeffekt/ce-form-creator';
import { FormsRootSelectionDialogComponent, FormsRootSelectionDialogService } from '../../forms-root/forms-root-selection-dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    CeFormCreatorModule,
    MatDialogModule,
    FormsRootSelectionDialogComponent,
  ],
  providers: [
    {
      provide: RootSelectionDialogService,
      useClass: FormsRootSelectionDialogService,
    }
  ],
  selector: 'lib-space-editor',
  templateUrl: './space-editor.component.html',
  styleUrls: ['./space-editor.component.css']
})
export class SpaceEditorComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private layoutService = inject(LayoutService);
  private spacesService = inject(CeSpacesService);

  spaceInfo!: SpaceEditorInfo;

  ngOnInit(): void {
    this.spaceInfo = this.route.snapshot.data.form;
  }

  async onSave(project: ProjectFormat) {
    try {
      await this.spacesService.updateSpaceEditor(this.spaceInfo.form.core.id, project);
      this.layoutService.showSingleMessage(`Project ${this.spaceInfo.form.core.id} updated.`);
    } catch (err) {
      this.layoutService.showErrorMessage(`Cannot update project ${this.spaceInfo.form.core.id}`);
    }
    this.router.navigate([".."], { relativeTo: this.route });
  }

  onCancel() {
    this.router.navigate([".."], { relativeTo: this.route });
  }

}
