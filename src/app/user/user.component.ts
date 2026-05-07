import { Component, Input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() user!: User;
  // @Output() select = new EventEmitter<string>();
  select = output<string>();
  @Input({ required: true }) selected!: boolean;

  // avatar = input.required<string>();
  // name = input.required<string>();

  // selectedUser = signal(DUMMY_USERS[0]); //;
  // imageUrl = computed(() => {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // });

  // imageUrl = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  get imageUrl() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.select.emit(this.user.id);
  }
}
