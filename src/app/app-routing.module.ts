import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { HomeComponent } from './components/views/home/home.component';
import { JobsCreateComponent } from './components/views/jobs/jobs-create/jobs-create.component';
import { JobsDeleteComponent } from './components/views/jobs/jobs-delete/jobs-delete.component';
import { JobsReadComponent } from './components/views/jobs/jobs-read/jobs-read.component';
import { JobsUpdateComponent } from './components/views/jobs/jobs-update/jobs-update.component';
import { RacesCreateComponent } from './components/views/races/races-create/races-create.component';
import { RacesDeleteComponent } from './components/views/races/races-delete/races-delete.component';
import { RacesReadComponent } from './components/views/races/races-read/races-read.component';
import { RacesUpdateComponent } from './components/views/races/races-update/races-update.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'jobs',
    component: JobsReadComponent
  },
  {
    path: 'jobs/create',
    component: JobsCreateComponent
  },
  {
    path: 'jobs/delete/:id',
    component: JobsDeleteComponent
  },
  {
    path: 'jobs/update/:id',
    component: JobsUpdateComponent
  },
  {
    path: 'races',
    component: RacesReadComponent
  },
  {
    path: 'races/create',
    component: RacesCreateComponent
  },
  {
    path: 'races/delete/:id',
    component: RacesDeleteComponent
  },
  {
    path: 'races/update/:id',
    component: RacesUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
