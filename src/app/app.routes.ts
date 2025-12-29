import { Routes } from '@angular/router';
// import { AuthLayoutComponent } from './auth-layout';
import { ComponentsComponent } from './components/components.component';
import { AuthLayoutComponent } from './auth-layout';
import { LoginComponent } from './components/auth/login/login.component';
import { canActivateGuard } from './can-activate.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ResumeFormComponent } from './components/TempResume/resume-builder/resume-form/resume-form.component';
import { InnerHomeComponent } from './components/Resume/home/inner-home/inner-home.component';
// import { SampleResumeComponent } from './components/Resume/home/inner-home/sample-resume/sample-resume.component';
import { TemplateResumeComponent } from './components/Resume/home/inner-home/template-resume/template-resume.component';
// import { ViewAnsSheetComponent } from './components/studentlist/view-ans-sheet/view-ans-sheet.component';
// import { AnswerKeyComponent } from './components/studentlist/answer-key/answer-key.component';

export const routes: Routes = [
    // {
    //     path: '',
    //     component: AuthLayoutComponent,
    //     children: [
    //         { path: '', redirectTo: 'login', pathMatch: 'full' },
    //         { path: 'login', component: LoginComponent },
    //     ],
    // },
    // {
    //     path: '',
    //     component: ComponentsComponent,
    //     children: [
    //         { path: 'dashboard', component: DashboardComponent },
    //         { path: 'resume-form', component: ResumeFormComponent }
    //         // { path: 'answer-key', component: AnswerKeyComponent },
    //         // { path: 'views', component: ViewAnsSheetComponent },

    //     ]
    // },
    // {
    //     path: '', component: DashboardComponent,
    // },
    {
        path: '', component: ComponentsComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', component: DashboardComponent },
            { path: 'inner-home', component: InnerHomeComponent },
            // { path: 'sample-resume', component: SampleResumeComponent },
            { path: 'template-resume', component: TemplateResumeComponent },
        ]
    },


    { path: '**', redirectTo: '', pathMatch: 'full' },


];
