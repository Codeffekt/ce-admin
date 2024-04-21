import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CeFormEditorService, FormInfo, CeProcessingService } from '@codeffekt/ce-core';
import { FormInstance, FormInstanceMaskWrapper, FormWrapper } from '@codeffekt/ce-core-data';
import { ProcessingCommandInterface, ProcessingDialogComponent } from '../processing-dialog/processing-dialog.component';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, firstValueFrom, interval } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'lib-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  //@Input() processing!: FormInstanceExt;

  formInfo!: FormInfo;
  form!: FormInstance;
  formWrapper!: FormWrapper<any>;

  processingMask = FormInstanceMaskWrapper.withOrder([
    "name", "status", "description", "message",
    "endpoint", "params"
  ]);

  private dialogIsOpen = false;

  constructor(
    private dialog: MatDialog,
    private formEditorService: CeFormEditorService,
    private processingService: CeProcessingService,
  ) {
    this.processingMask.props.mask = {
      content: {
        endpoint: {
          field: "endpoint",
          label: "Endpoint"
        },
        params: {
          field: "params",
          label: "Paramètres"
        },       
        res: {
          field: "res",
          disabled: true
        },
        progress: {
          field: "progress",
          disabled: true
        },
        message: {
          field: "message",
          readonly: true
        },
        name: {
          field: "name",
          readonly: true,
        },
        status: {
          field: "status",
          readonly: true,
        },
        description: {
          field: "description",
          disabled: true,
        }
      }
    };
    this.retrieveForm();
    // this.autoUpdateForm();
  }

  ngOnInit(): void {
    //console.log(this.processing);
  }

  async onStart() {
    await this.createProcessingDialog(
      {
        run: async () => {
          return await this.processingService.start(this.form.id);
        },
        onDone: (res) => {
          return `Processing ${this.form.id} started with res ${JSON.stringify(res)}`;
        },
        onError: (err) => {
          return `Receive err ${JSON.stringify(err)}`;
        },
        onRunning: () => {
          return `Start processing ${this.form.id}`;
        },
      }
    );
    this.reloadForm();
  }

  async onCancel() {
    await this.createProcessingDialog(
      {
        run: async () => {
          return await this.processingService.cancel(this.form.id);
        },
        onDone: (res) => {
          return `Processing ${this.form.id} canceled with res ${JSON.stringify(res)}`;
        },
        onError: (err) => {
          return `Receive err ${JSON.stringify(err)}`;
        },
        onRunning: () => {
          return `Cancel processing ${this.form.id}`;
        },
      }
    );  
    this.reloadForm();  
  }

  async onCheck() {    
    await this.createProcessingDialog(
      {
        run: async () => {
          return await this.processingService.status(this.form.id);
        },
        onDone: (res) => {
          return `Processing ${this.form.id} status with res ${JSON.stringify(res)}`;
        },
        onError: (err) => {
          return `Receive err ${JSON.stringify(err)}`;
        },
        onRunning: () => {
          return `Status processing ${this.form.id}`;
        },
      }
    );    
    this.reloadForm();
  }

  async onFormChanges(formInfo: FormInfo, wrapper: FormWrapper) {
  }

  async onReset() {
    FormWrapper.setFormValue("status", "NONE", this.form);
    this.formEditorService.updateForm(this.form);
  }

  private async createProcessingDialog(pci: ProcessingCommandInterface) {
    this.dialogIsOpen = true;
    const dialogRef = ProcessingDialogComponent.openDialog<FormInstance>(
      this.dialog,
      pci
    );
    await firstValueFrom(dialogRef.afterClosed());
    this.dialogIsOpen = false;
  }

  private updateFormInfo(formInfo: FormInfo) {
    this.formInfo = formInfo;
    this.form = this.formInfo.form.core;
    this.formWrapper = this.formInfo.form;
  }

  private async retrieveForm() {
    this.formEditorService.onFormInfo()
      .pipe(
        untilDestroyed(this)
      ).subscribe(formInfo => this.updateFormInfo(formInfo));
  }

  private reloadForm() {
    this.formEditorService.getForm(this.form.id, { forceReload: true });
  }

  private async autoUpdateForm() {
    interval(2000).pipe(
      untilDestroyed(this),
      filter(() => this.form !== undefined && !this.dialogIsOpen),      
    ).subscribe(_ => this.formEditorService.getForm(this.form.id, { forceReload: true }));
  }
}
