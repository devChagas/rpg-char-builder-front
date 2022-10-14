import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './components/views/home/home.component';
import { JobsReadComponent } from './components/views/jobs/jobs-read/jobs-read.component';
import { JobsCreateComponent } from './components/views/jobs/jobs-create/jobs-create.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { JobsDeleteComponent } from './components/views/jobs/jobs-delete/jobs-delete.component';
import { JobsUpdateComponent } from './components/views/jobs/jobs-update/jobs-update.component';
import { RacesReadComponent } from './components/views/races/races-read/races-read.component';
import { RacesCreateComponent } from './components/views/races/races-create/races-create.component';
import { RacesDeleteComponent } from './components/views/races/races-delete/races-delete.component';
import { RacesUpdateComponent } from './components/views/races/races-update/races-update.component';
import { ItemsReadComponent } from './components/views/items/items-read/items-read.component';
import { ItemsCreateComponent } from './components/views/items/items-create/items-create.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    JobsReadComponent,
    JobsCreateComponent,
    JobsDeleteComponent,
    JobsUpdateComponent,
    RacesReadComponent,
    RacesCreateComponent,
    RacesDeleteComponent,
    RacesUpdateComponent,
    ItemsReadComponent,
    ItemsCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
