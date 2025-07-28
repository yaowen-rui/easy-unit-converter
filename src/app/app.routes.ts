import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { UnitDetailComponent } from './unitDetail/unitDetail.component';
import { Component } from '@angular/core';

export const routes: Routes = [
  {path:'', component:HomeComponent,
    children: [
      {path:'unit/:id', component:UnitDetailComponent}
    ]
  },

  {path:'**', component:NotFoundComponent}
];
