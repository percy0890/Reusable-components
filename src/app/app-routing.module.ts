import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HttpCallsComponent } from './http-calls/http-calls.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'post',
    component: HttpCallsComponent
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
