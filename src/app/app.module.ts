import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { StudyComponent } from './study/study.component';
import { TechComponent } from './tech/tech.component';
import { ProyComponent } from './proy/proy.component';
import { MatIconModule } from '@angular/material/icon';
import { BarComponent } from './bar/bar.component';
import { PieComponent } from './pie/pie.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { IndexComponent } from './index/index.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StudyComponent,
    TechComponent,
    ProyComponent,
    BarComponent,
    PieComponent,
    ProyectosComponent,
    IndexComponent,
    DialogBoxComponent
  ],
  imports: [
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    MatSliderModule,
    MatCardModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  entryComponents: [DialogBoxComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
