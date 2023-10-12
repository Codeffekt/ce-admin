import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthZService } from '../services/authz.service';

@Directive({
  selector: '[isNotSuperAdmin]'
})
export class IsNotSuperAdminDirective {

  constructor(
    private authZService: AuthZService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }  

  ngOnInit() {
    if (!this.authZService.isSuperAdmin()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

}
