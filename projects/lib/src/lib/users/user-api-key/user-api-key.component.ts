import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { AuthZService } from '../../services/authz.service';
import { firstValueFrom } from 'rxjs';
import { FormWrapper, IndexType } from '@codeffekt/ce-core-data';
import { LayoutService } from '@codeffekt/ce-core';
import { MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface UserApiKeyComponentConfig {
  account: IndexType;
}

@Component({
  selector: 'lib-user-api-key',
  templateUrl: './user-api-key.component.html',
  styleUrls: ['./user-api-key.component.scss']
})
export class UserApiKeyComponent implements OnInit {

  form!: UntypedFormGroup;

  durationOptions: {label: string, durationS: number }[] = [
    {
      label: '1 jour',
      durationS: 86400
    },    
    {
      label: '1 semaine',
      durationS: 604800,
    },
    {
      label: '2 semaines',
      durationS: 1296000,
    },
    { 
      label: '1 mois',
      durationS: 18748800
    },
    {
      label: '1 an',
      durationS: 6843312000
    }
  ];

  apiKey = "";

  static createDialog(config: UserApiKeyComponentConfig): MatDialogConfig {
    return {
      width: "350px",
      data: config
    };
  }

  constructor(
    private formBuilder: UntypedFormBuilder,
    private dialogRef: MatDialogRef<UserApiKeyComponent>,
    @Inject(MAT_DIALOG_DATA) private config: UserApiKeyComponentConfig,
    private layout: LayoutService,
    private authService: AuthZService) {
    this.createForm();
  }

  dismiss() {
    this.dialogRef.close(null)
  }

  onSubmit() {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  async generateApiKey() {
    const formToken = await firstValueFrom(this.authService.generateToken(
      this.config.account,
      this.form.value.duration.durationS
    ));
    this.apiKey = FormWrapper.getFormValue("token", formToken);
  }

  copyApiKeyToClipboard() {
    this.layout.showSingleMessage(`API key copied to clipboard`);
  }

  private createForm() {
    this.form = this.formBuilder.group({
      duration: [this.durationOptions[0]]
    });
  }
}
