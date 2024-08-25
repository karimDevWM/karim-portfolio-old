import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TranslateModule } from '@ngx-translate/core';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ContactComponent } from './contact/contact.component';
import { CurriculumVitaeComponent } from './curriculum-vitae/curriculum-vitae.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { ReferencesComponent } from './references/references.component';

@NgModule({
  declarations: [AppComponent, AboutComponent, HeaderComponent, ContactComponent, CurriculumVitaeComponent, HomeComponent, ProjectsComponent, SkillsComponent, ReferencesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    TranslateModule,
    MatRadioModule,
    FormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
