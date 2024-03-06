import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CeAccountService } from '@codeffekt/ce-core';
import { AccountSettings, IndexType } from '@codeffekt/ce-core-data';
import { UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'ce-admin-project-accounts',
  templateUrl: './project-accounts.component.html',
  styleUrls: ['./project-accounts.component.scss']
})
export class ProjectAccountsComponent implements OnInit {

  // @Input() project!: Project;
  @ViewChild('newAccountInput') newAccountInput!: ElementRef;

  allAccounts!: AccountSettings[];

  projectAccountsList: IndexType[] = [];
  filteredAccounts!: AccountSettings[];
  newAccountFormControl = new UntypedFormControl();

  canSave = false;

  constructor(
    private snackBar: MatSnackBar,
    private accountsService: CeAccountService
  ) {
  }

  ngOnInit() {
    /* this.accountsService.getMembers()
      .pipe(untilDestroyed(this))
      .subscribe(members => {
        this.allAccounts = members;
        this.projectAccountsList = this.allAccounts
          .filter(account => account.projects && account.projects.includes(this.project.id))
          .map(account => account.id);
      });

    this.newAccountFormControl
      .valueChanges
      .pipe(untilDestroyed(this))
      .subscribe(accountOrLogin => this.filterAccounts(accountOrLogin?.login ?? accountOrLogin)); */
  }

  addAccount(account: AccountSettings) {
    const index = this.projectAccountsList.indexOf(account.id);
    if (index === -1) {
      this.projectAccountsList.push(account.id);
    }

    this.newAccountFormControl.reset(null);
    this.newAccountInput.nativeElement.blur();

    this.canSave = true;
  }

  removeAccount(id: IndexType) {
    const index = this.projectAccountsList.indexOf(id);
    if (index !== -1) {
      this.projectAccountsList.splice(index, 1);
    }

    this.canSave = true;
  }

  filterAccounts(accountLogin?: string) {
    this.filteredAccounts = this.allAccounts
      .filter(account => this.projectAccountsList.indexOf(account.id) === -1)
      .filter(account =>
        accountLogin ? account.login.toLowerCase().indexOf(accountLogin.toLowerCase()) === 0 : true
      );
  }

  async save() {
    /* try {
      await this.accountsService.updateProjectsAccounts([this.project.id], this.projectAccountsList).toPromise();
      this.toast("Modifications sauvegardées");
    } finally {
      this.canSave = false;
    } */
  }

  private toast(msg: string) {
    this.snackBar.open(msg, "", { duration: 2000 });
  }
}
