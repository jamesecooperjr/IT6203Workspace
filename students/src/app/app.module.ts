import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { NewStudentFormComponent } from './new-student-form/new-student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NewStudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
