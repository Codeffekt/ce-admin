import { MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { LayoutService } from '@codeffekt/ce-core';

@Component({
  selector: 'ce-admin-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

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
