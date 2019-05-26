import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';
import { CounterComponent } from './counter/counter.component';
import { MeComponent } from './me/me.component';
import { HeaderComponent } from './header/header.component';
import { DownloadComponent } from './download/download.component';
import { DownloadcvComponent } from './downloadcv/downloadcv.component';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    FooterComponent,
    CounterComponent,
    MeComponent,
    HeaderComponent,
    DownloadComponent,
    DownloadcvComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
