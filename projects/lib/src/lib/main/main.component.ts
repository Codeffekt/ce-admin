import { MediaMatcher } from '@angular/cdk/layout';
import { Portal } from '@angular/cdk/portal';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { CeAppConfig, CeNavBarService, LayoutService } from '@codeffekt/ce-core';
import { Observable } from 'rxjs';
import { ConfigurationService } from '../services/configuration.service';
import { CeActiveAdminMenuEntry, CeAdminMenuService } from '../services/menu.service';

@Component({
  selector: 'ce-admin-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatDrawer) drawer!: MatDrawer;
  menuEntries!: CeActiveAdminMenuEntry[];
  navBarPortal$!: Observable<Portal<any> | undefined>;

  appConfig!: CeAppConfig;

  mobileQuery!: MediaQueryList;

  private _mobileQueryListener!: () => void;

  constructor(
    private layout: LayoutService,
    private menuService: CeAdminMenuService,
    configService: ConfigurationService,
    private navBarService: CeNavBarService,
    private media: MediaMatcher,
    private changeDetectorRef: ChangeDetectorRef,    
  ) {
    this.listenMobileQuery();
    this.appConfig = configService.getConfig();
    this.menuEntries = this.menuService.getActiveMenuEntries();
  }

  ngOnInit(): void { 
    setTimeout(() => {      
      this.navBarPortal$ = this.navBarService.getPortal();
    });
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
