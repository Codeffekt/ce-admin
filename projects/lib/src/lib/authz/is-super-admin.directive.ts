import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthZService } from '../services/authz.service';

@Directive({
  selector: '[isSuperAdmin]'
})
export class IsSuperAdminDirective implements OnInit {

  constructor(
    private authZService: AuthZService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }  

  ngOnInit() {
    if (this.authZService.isSuperAdmin()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
