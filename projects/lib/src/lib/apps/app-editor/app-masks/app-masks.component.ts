import { Component, Injectable, OnInit } from '@angular/core';
import { CeFormRouteParams, CeFormRouteResolver, ICeFormRouteResolver } from '@codeffekt/ce-core';
import { FormInstance, FormInstanceMaskWrapper, FormWrapper, IndexType } from '@codeffekt/ce-core-data';
import { AppRunnerService } from '../../../services/app-runner.service';

@Injectable()
class FormEditorFormRouteResolver implements ICeFormRouteResolver {
  navigate(formId: IndexType, formInstance: FormInstance): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  resolve(formField: string, formId: IndexType, formInstance: FormInstance): CeFormRouteParams {    
    return { route: ['/forms', 'edit', formId] };
  }

}

@Component({
  selector: 'lib-app-masks',
  templateUrl: './app-masks.component.html',
  styleUrls: ['./app-masks.component.scss'],
  providers: [{
    provide: CeFormRouteResolver,
    useClass: FormEditorFormRouteResolver,    
  }]
})
export class AppMasksComponent implements OnInit {

  currentApp: FormWrapper;
  mask!: FormInstanceMaskWrapper;

  constructor(
    private appRunnerService: AppRunnerService,
  ) {
    this.currentApp = appRunnerService.getCurrentApp()!;
    this.mask = FormInstanceMaskWrapper.withOnly(
      this.currentApp.core as FormInstance,
      ['masks']);
    this.mask.setFieldParams('masks', {
      scope: "global",
      fields: ["$title", "root"]
    });
  }

  ngOnInit(): void {
  }

}
