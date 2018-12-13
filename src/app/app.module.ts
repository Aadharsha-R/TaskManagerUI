import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AddComponent } from './ui/add/add.component';
import { UpdateComponent } from './ui/update/update.component';
import { ViewComponent } from './ui/view/view.component';
import { SharedService } from './services/shared.service';
import { FilterPipe } from './pipes/filter.pipe';

const appRoutes : Routes = [

  { path : 'Add' , component : AddComponent } ,
  { path : 'Update' , component : UpdateComponent } ,
  { path : 'View' , component : ViewComponent }  ,
];

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    UpdateComponent,
    ViewComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule , ReactiveFormsModule, FormsModule , HttpModule , RouterModule.forRoot(appRoutes)
  ],
  providers: [SharedService,FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
