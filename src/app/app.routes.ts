import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { AboutComponent } from './Components/about/about.component';
import { CreateBinComponent } from './Components/create-bin/create-bin.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './Components/home/home.component';
import { ViewSnippetComponent } from './Components/view-snippet/view-snippet.component';

export const routes: Routes = [
{path:"login",component:LoginComponent},
{path:"create",component:CreateBinComponent,canActivate:[authGuard]},

{path:"signup",component:SignupComponent},
{path:"",component:HomeComponent},
{path:"snippet/:id",component:ViewSnippetComponent},
{path:"about",loadComponent: () => import('./Components/about/about.component').then(mod => mod.AboutComponent)},
{path:"**",component:NotFoundComponent},



];
