//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TrainerComponent } from './trainer/trainer.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { FormsModule } from '@angular/forms';

//decorator
@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent, 
    TrainerComponent, 
    CatalogueComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule,
    FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
