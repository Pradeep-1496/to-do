import { Routes } from '@angular/router';
import { ToDo } from './components/to-do/to-do';
import { NotFound } from './components/not-found/not-found';

export const routes: Routes = [
  {
    path: '',
    component: ToDo,
  },
  // {
  //   path: 'todo',
  //   component: ToDo,
  // },
  {
    path: '**',
    component: NotFound,
    
  },
];
