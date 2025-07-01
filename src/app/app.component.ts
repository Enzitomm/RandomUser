import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html'
})
export class AppComponent {
  private userService = inject(UserService);
  users: any[] = [];
  search = '';
filtered: any;
AppComponent: any;

  constructor() {
    this.userService.getUsers().subscribe(res => this.users = res.results);
  }

  get filteredUsers() {
    return this.users.filter(u =>
      (`${u.name.first} ${u.name.last}`)
        .toLowerCase()
        .includes(this.search.toLowerCase())
    );
  }
}


