import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ContactComponent } from './contact/contact.component';
import { ResumeComponent } from './resume/resume.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule, Routes } from '@angular/router';
import { NumberInfoComponent } from './numberInfo.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about-me', component: AboutMeComponent},
  {path: 'my-work', component: MyWorkComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'numberInfo', component: NumberInfoComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    MyWorkComponent,
    ContactComponent,
    ResumeComponent,
    ToolbarComponent,
    NumberInfoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
