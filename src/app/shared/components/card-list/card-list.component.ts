import { Task } from './../../interfaces/task';
import { TaskService } from './../../../home/services/task.service';
import { List } from './../../interfaces/list';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.sass']
})
export class CardListComponent implements OnInit {

  @Input() list: List
  task: Task
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

}
