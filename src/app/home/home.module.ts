import { SharedModule } from './../shared/shared.module';
import { StatusService } from './services/status.service';
import { TaskService } from './services/task.service';
import { ListService } from './services/list.service';
import { HomeRoutingModule } from './home-routing.module';
import { HomeInterceptor } from './home.interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './containers/home/home.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToDoListComponent } from './containers/to-do-list/to-do-list.component';
import { ArchivesComponent } from './containers/archives/archives.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [HomeComponent, ToDoListComponent, ArchivesComponent, NotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule,
    ModalModule.forRoot()
  ],
  providers: [
    ListService,
    TaskService,
    StatusService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HomeInterceptor,
      multi: true
  }
  ]
})
export class HomeModule { }
