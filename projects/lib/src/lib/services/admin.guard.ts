import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CeCoreService } from '@codeffekt/ce-core';
// import { }

// must be authenticated first
@Injectable({ providedIn: 'root' })
export class AdminGuard  {
  constructor(private router: Router,
    private apiService: CeCoreService) { }

  async canActivate() {

    
    const isLogged = await this.apiService.persistent();

    if (!isLogged) {
      this.router.navigate(['/login']);
      return false;
    }

    if (this.apiService.isCurrentUserAdmin()) {
      return true;
    }

    // todo: error message feeback missing

    this.router.navigate(['/login']);
    return false;
  }
}
