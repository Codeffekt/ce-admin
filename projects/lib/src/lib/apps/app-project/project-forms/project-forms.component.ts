import { Component, Injectable, OnInit } from '@angular/core';
import { 
  CeFormRouteParams, 
  CeFormRouteResolver, ICeFormRouteResolver } from '@codeffekt/ce-core';
import { FormBlock, FormCreator, FormInstance, FormInstanceBase, FormProjectWrapper, FormWrapper, IndexType } from '@codeffekt/ce-core-data';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ReplaySubject } from 'rxjs';
import { AppRunnerService } from '../../../services/app-runner.service';

@Injectable()
class ProjectFormsFormRouteResolver implements ICeFormRouteResolver {
  resolve(formField: string, formId: IndexType, formInstance: FormInstance): CeFormRouteParams {
    return { route: [formId], isRelativeRoute: true };
  }
}

@UntilDestroy()
@Component({
  selector: 'lib-project-forms',
  templateUrl: './project-forms.component.html',
  styleUrls: ['./project-forms.component.scss'],
  providers: [{
    provide: CeFormRouteResolver,
    useClass: ProjectFormsFormRouteResolver
  }]
})
export class ProjectFormsComponent implements OnInit {

  wrapper$: ReplaySubject<FormWrapper> = new ReplaySubject();

  private project!: FormProjectWrapper;
  private assoc!: FormBlock;

  constructor(
    readonly appRunnerService: AppRunnerService,
  ) {

    this.project = appRunnerService.getCurrentProject()!;

    appRunnerService.assoc$.pipe(
      untilDestroyed(this)
    ).subscribe(assoc => {
      this.assoc = assoc;
      this.updateWrapperAssoc();
    });
  }

  ngOnInit(): void {
  }

  private updateWrapperAssoc() {
    const form: FormInstanceBase = {
      title: this.assoc.field,
      id: this.project.core.id,
      ctime: this.project.core.ctime,
      mtime: this.project.core.mtime,
      content: {
        [this.assoc.field]: {
          root: this.assoc.root,
          type: "formAssoc",
          field: this.assoc.field,
          value: [],
          params: {
            ref: this.assoc.params.ref,
            fields: (<any>this.assoc).fields || [
            ],
            extMode: (<any>this.assoc).extMode ? true : false,
            scope: "global"
          }
        }
      }
    };

    this.wrapper$.next(FormWrapper.fromForm(form as any));
  }
}
