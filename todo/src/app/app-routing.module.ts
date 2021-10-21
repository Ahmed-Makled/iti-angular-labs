import { RegisterComponent } from './views/register/register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './views/todo/todo.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  {
  path: '',
  component: LoginComponent,

},
{
  path: 'todo',
  component: TodoComponent,

},
{
  path: 'login',
  component: LoginComponent,

},
{
  path: 'register',
  component: RegisterComponent,

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
