import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CeAccountService, CeCoreService, CeFormQueryService, CeFormsService, LayoutService } from '@codeffekt/ce-core';
import { FormAccount, FormAccountWrapper } from '@codeffekt/ce-core-data';
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

  usersDataSource!: UsersDataSource;
  users$!: Observable<readonly FormAccountWrapper[]>;
  
  constructor(
    private readonly queryService: CeFormQueryService<FormAccountWrapper>,
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

  createUser() {
    this.router.navigate(['/users/new']);
  }

  onSelected(user: FormAccountWrapper) {
    this.router.navigate(['/users/edit/', user.core.id]);
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
