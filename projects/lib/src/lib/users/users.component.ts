import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CeAccountService, CeCoreService, CeFormQueryService, CeFormsService, LayoutService } from '@codeffekt/ce-core';
import { FormAccount, FormAccountWrapper, FormWrapper } from '@codeffekt/ce-core-data';
import { firstValueFrom, Observable } from 'rxjs';
import { UsersDataSource } from './users-datasource';
import { UsersQueryBuilder } from './users-query.builder';

@Component({
  selector: 'ce-admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [
    CeFormQueryService
  ]
})
export class UsersComponent implements OnInit {

  @Input() formWrapper!: FormWrapper;
  @Output() formChanges = new EventEmitter<FormWrapper>();

  usersDataSource!: UsersDataSource;
  users$!: Observable<readonly FormAccountWrapper[]>;

  constructor(
    private readonly queryService: CeFormQueryService<FormAccountWrapper>,
    private route: ActivatedRoute,
    private router: Router,
    private layout: LayoutService,
    private coreService: CeCoreService,
    private formsService: CeFormsService,
    private accountService: CeAccountService,
  ) {
    this.usersDataSource = new UsersDataSource(this.formsService);
    this.queryService.setDatasource(this.usersDataSource);
  }

  ngOnInit() {
    this.prepareQueryService();
  }

  onSelected(user: FormAccountWrapper) {
    this.router.navigate([user.core.id], { relativeTo: this.route });
  }

  reloadUsers() {
    this.queryService.load();
  }

  async delete(user: FormAccountWrapper) {
    try {
      await firstValueFrom(this.accountService.remove(user.core.id));
      this.layout.showSingleMessage(`L'utilisateur ${user.props.login} à été supprimé.`);
      this.reloadUsers();
    } catch (err) {
      this.layout.showErrorMessage(`Erreur lors de la suppression de l'utilisateur ${user.props.login}`);
    }
  }

  private async prepareQueryService() {
    const currentUser = this.coreService.getCurrentUser();
    this.queryService.setQueryBuilder(
      UsersQueryBuilder.fromCurrentAccount(currentUser.settings)
    );
    const userFormRoot = await firstValueFrom(this.formsService.getFormRoot(FormAccount.ROOT));
    this.queryService.setModel(userFormRoot);
    this.users$ = this.queryService.connect();
    this.queryService.load();
  }

}
