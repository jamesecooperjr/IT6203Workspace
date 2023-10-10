import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { WarningMessageComponent } from './warning-message/warning-message.component';
import { SuccesMessageComponent } from './succes-message/succes-message.component';
import { SelectorComponent } from './selector/selector.component';
import { FormsModule } from '@angular/forms';
import { AnimalimageDirective } from './animalimage.directive';


@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent, 
    WarningMessageComponent,  SuccesMessageComponent, SelectorComponent, AnimalimageDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
