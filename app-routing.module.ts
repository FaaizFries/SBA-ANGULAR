import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// this is one use case of angular routing
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent }, // Set landing page as default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
