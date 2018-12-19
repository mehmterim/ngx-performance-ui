import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutPrimaryComponent } from '@ui/components/layouts';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LayoutPrimaryComponent,
    children: [
      {
        loadChildren: './home/home.module#HomeModule',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
