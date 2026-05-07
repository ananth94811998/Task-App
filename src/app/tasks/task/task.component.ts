import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input({ required: true }) task!: Task;
  @Input({ required: true }) id!: string;
  @Output() complete = new EventEmitter<string>();

  private tasksService = inject(TasksService);

  ngOnInit() {
    console.log('task ', this.task);
  }

  onCompleteTask() {
    return this.tasksService.removeTask(this.id);
  }
}
