/* import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LayoutService } from '@codeffekt/ce-core';

@Component({
  selector: 'lib-forms-main',
  templateUrl: './forms-main.component.html',
  styleUrls: ['./forms-main.component.css']
})
export class FormsMainComponent {

  @ViewChild(MatDrawer) drawer!: MatDrawer;  

  mobileQuery!: MediaQueryList;

  private _mobileQueryListener!: () => void;

  constructor(
    private layout: LayoutService,
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,    
  ) {
    this.listenMobileQuery();   
  }

  ngOnInit(): void {     
  }

  ngAfterViewInit() {
    this.layout.setDrawer(this.drawer);
  }

  ngOnDestroy(): void {
    this.removeMobileQuery();
  }

  private listenMobileQuery() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", this._mobileQueryListener);
  }

  private removeMobileQuery() {
    this.mobileQuery.removeEventListener("change", this._mobileQueryListener);
  }
}
 */