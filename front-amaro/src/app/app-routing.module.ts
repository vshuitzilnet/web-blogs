import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from '../app/login/login.component';
import {HomeComponent} from '../app/home/home.component';
import {AdminComponent} from '../app/admin/admin.component';
import {RegisterComponent} from '../app/register/register.component';
import {BlogComponent} from '../app/blog/blog.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { AutorsComponent } from './autors/autors.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [
  {path: '', redirectTo: 'home/:id',  pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: 'home/:id', component: HomeComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'create-blog', component: CreateBlogComponent},
  {path: 'autors', component: AutorsComponent},
  {path: 'view-blog/:id', component: ViewBlogComponent},
  {path: 'create-user/:id', component: CreateUserComponent},

  



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


