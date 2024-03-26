import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface ProcessingCommandInterface<T = any> {
  run(): Promise<T>;
  onRunning(): string;
  onDone<T>(res: T): string;
  onError<T>(err: Error): string;
}


@Component({
  selector: 'lib-processing-dialog',
  templateUrl: './processing-dialog.component.html',
  styleUrls: ['./processing-dialog.component.css']
})
export class ProcessingDialogComponent {

  commandStatus: 'pending' | 'running' | 'error' | 'done' = 'pending';
  commandMsg = '';

  static openDialog<T>(dialog: MatDialog, config: ProcessingCommandInterface<T>): MatDialogRef<ProcessingDialogComponent> {
    return dialog.open(ProcessingDialogComponent, {
      width: "800px",
      maxHeight: "80%",
      height: '1000px',
      data: config
    });
  }

  constructor(
    private dialogRef: MatDialogRef<ProcessingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private config: ProcessingCommandInterface,
  ) {
    this.runCommand();
  }

  async runCommand() {
    try {
      this.commandStatus = 'running';
      this.commandMsg = this.config.onRunning();
      const res = await this.config.run();
      this.commandMsg = this.config.onDone(res);
      this.commandStatus = 'done';
    } catch (err) {
      this.commandMsg = this.config.onError(err as Error);
      this.commandStatus = 'error';
    }

  }

  close() {
    this.dialogRef.close();
  }

}
