import { ArchivesComponent } from './containers/archives/archives.component';
import { ToDoListComponent } from './containers/to-do-list/to-do-list.component';
import { HomeComponent } from './containers/home/home.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            {path: 'to-do-list', component: ToDoListComponent},
            {path: 'archives', component: ArchivesComponent},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule { }