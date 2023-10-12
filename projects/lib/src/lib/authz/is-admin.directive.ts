import { Directive, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthZService } from '../services/authz.service';

@Directive({
  selector: '[isAdmin]'
})
export class IsAdminDirective implements OnInit {

  constructor(
    private authZService: AuthZService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {
  }  

  ngOnInit() {
    if (this.authZService.isAdmin()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
