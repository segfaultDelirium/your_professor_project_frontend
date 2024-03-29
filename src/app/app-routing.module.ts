import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {SignUpComponent} from "./auth/sign-up/sign-up.component";
import { CountriesComponent } from './modules/countries/countries.component';
import { ExampleQueriesComponent } from './modules/example-queries/example-queries.component';
import { UserComponent } from './modules/user/user.component';

const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'signup', component: SignUpComponent
  },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
  { path: '', redirectTo: 'countries', pathMatch: 'full'},
  { path: 'example-queries', component: ExampleQueriesComponent},
  { path: 'QueryExecutor', loadChildren: () => import('./modules/query-executor/query-executor.module').then(m => m.QueryExecutorModule) },
  { path: 'countries', component: CountriesComponent},
  { path: 'user', component: UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
