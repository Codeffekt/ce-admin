import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthZService } from '../services/authz.service';

@Directive({
  selector: '[hasAllResource]'
})
export class HasAllResourceDirective {

  private resource!: string;

  @Input()
  set hasAllResource(val: string) {
    this.resource = val;
  }

  constructor(
    private authZService: AuthZService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }  

  ngOnInit() {
    if (this.authZService.checkResourceActionsPermission(this.resource, ["all"])) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
