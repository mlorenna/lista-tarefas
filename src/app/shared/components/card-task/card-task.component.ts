import { Task } from './../../interfaces/task';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.sass']
})
export class CardTaskComponent implements OnInit {

  @Input() task: Task
  isEmpty: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isEmpty = true
  }

}
