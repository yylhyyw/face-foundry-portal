import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HeaderComponent } from './header/header.component';

import { MustMatchDirective } from './validators/must-match.directive';

const appRoutes: Routes = ([
  {path: "", component: LogInComponent,},
  {path: "portal", component: MainComponent}
]);

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LogInComponent,
    MustMatchDirective,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
