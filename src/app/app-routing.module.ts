import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CreateComponent } from './pages/create/create.component';
import { ListComponent } from './pages/list/list.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'list', component: ListComponent, data: {title: 'List'}},
  {path: 'create', component: CreateComponent, data: {title: 'Create'}},
  // {path: 'book-list', component: BookStoreComponent, data: { title: 'Book Store'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: '', redirectTo: '/home', pathMatch: 'full'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
