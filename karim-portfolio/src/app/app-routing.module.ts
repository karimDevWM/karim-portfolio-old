import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    { path: '', component: AppComponent }, 
    // { path: 'skills', component: SkillsComponent }, 
    // { path: 'projects', component: ProjectsComponent }, 
    // { path: 'cv', component: CurriculumVitaeComponent }, 
    { path: 'about', component: AboutComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        TranslateModule.forRoot(),
    ],
    
    exports: [RouterModule]
})
export class AppRoutingModule { }