import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DreamComponent } from './dream/dream.component';
import { Home1BodyComponent } from './home1-body/home1-body.component';
import { TryItComponent } from './try-it/try-it.component';

const routes: Routes = [
  { path: 'dream', component: DreamComponent },
  { path: '', component: Home1BodyComponent },
  { path: 'try-it', component: TryItComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
