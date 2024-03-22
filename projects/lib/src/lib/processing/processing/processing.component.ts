import { Component, OnInit, inject } from '@angular/core';
import { CeFormEditorService, FormInfo, FormMaskBuilder } from '@codeffekt/ce-core';
import { FormInstanceMaskWrapper, FormWrapper } from '@codeffekt/ce-core-data';

@Component({
  selector: 'lib-processing',
  templateUrl: './processing.component.html',
  styleUrls: ['./processing.component.css']
})
export class ProcessingComponent implements OnInit {

  //@Input() processing!: FormInstanceExt;

  processing$ = inject(CeFormEditorService).onFormInfo();

  processingMask = FormInstanceMaskWrapper.withOrder([
    "name", "status", "description",
    "endpoint", "params"
  ]);

  constructor() {
    this.processingMask.props.mask = { 
      content: {
        res: {
          field: "res",
          disabled: true
        },
        progress: {
          field: "progress",
          disabled: true
        }
      }     
    };
  }

  ngOnInit(): void {
    //console.log(this.processing);
  }

  async onFormChanges(formInfo: FormInfo, wrapper: FormWrapper) {
  }
}
