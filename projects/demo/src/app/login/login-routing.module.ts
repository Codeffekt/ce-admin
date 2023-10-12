import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@codeffekt/ce-core';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        data: {
            'logo':'https://picsum.photos/72'
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LoginRoutingModule { }
