import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LevelComponent } from './level/level.component';
import { CrashcourseComponent } from './crashcourse/crashcourse.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
// import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
{ path: 'admin', component: AdminComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: 'employee-practice' , component: LevelComponent},
  { path: 'employee-crash-course',component:CrashcourseComponent},
  {path: 'employee-recommendations', component:RecommendationsComponent},
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
