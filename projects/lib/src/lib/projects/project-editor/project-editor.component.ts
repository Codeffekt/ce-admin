import { Component, Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CeFormRouteParams, CeFormRouteResolver, CeProjectsService, ICeFormRouteResolver } from '@codeffekt/ce-core';
import { FormInstance, IndexType, FormProjectWrapper, FormWrapper } from '@codeffekt/ce-core-data';
import { ConfigurationService } from '../../services/configuration.service';

@Injectable()
class FormProjectEditorFormRouteResolver implements ICeFormRouteResolver {
  resolve(formField: string, formId: IndexType, formInstance: FormInstance): CeFormRouteParams {
      return { route: ['/forms/edit', formId] };
  }
}

@Component({
  selector: 'lib-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.scss'],
  providers: [{
    provide: CeFormRouteResolver,
    useClass: FormProjectEditorFormRouteResolver
  }]
})
export class ProjectEditorComponent implements OnInit {

  project!: FormProjectWrapper;
  projectStr!: string;  
  canSave!: boolean;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,    
    private projectService: CeProjectsService,
    private configurationService: ConfigurationService
  ) { }

  ngOnInit() {
    this.project = this.route.snapshot.data.project;
    this.updateForm();
    this.updateCodeEditor();
  }

  async save() {
    this.updateProject();
    this.doSave();
    this.updateCodeEditor();
  }

  async saveCode(project: FormProjectWrapper) {      
    this.project = project;    
    this.doSave();
    this.updateForm();    
  }

  private async doSave() {
    // await this.projectService.updateProject(this.project);    
    this.projectService.setCurrentProject(this.project);
    this.toast("Modifications sauvegardées");    
  }

  formChanges(formWrapper: FormWrapper) {    
    this.canSave =
      formWrapper.props.name !== this.project.props.name; 
  }

  private updateCodeEditor() {    
    this.projectStr = JSON.stringify(this.project, null, 2);      
  }

  private updateForm() {
    // const projectFacade = new ProjectFormFacade(this.configurationService);    
  }

  private updateProject() {    
  }

  private toast(msg: string) {
    this.snackBar.open(msg, "", { duration: 2000 });
  }

}
