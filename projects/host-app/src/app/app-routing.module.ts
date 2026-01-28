import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { loadRemoteEntry, loadRemoteModule } from '@angular-architects/module-federation';
//import { TodoComponent } from './todo/todo.component';

const mfeAppUrl ="http://localhost:4300/remoteEntry.js";

const routes: Routes = [
  {path :'', redirectTo:'/home' , pathMatch:'full'},
  {path:'home' , component: HomeComponent},
  {path:'todo-list' , /*component: TodoComponent*/
    loadChildren: () => {
      return loadRemoteModule({
        remoteEntry: mfeAppUrl,
        remoteName : "mfeApp",
        exposedModule : "./TodoListModule"
      }).then(m => m.TodoListModule).catch(err => console.log(err));
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routeCompArr = [HomeComponent/*, TodoComponent*/];
