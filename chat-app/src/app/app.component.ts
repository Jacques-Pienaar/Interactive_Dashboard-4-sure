import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'chat-app';
  userData = {
    users: [
      {
        user_id: 1,
        username: 'Le Chef',
        status: 'online',
        avatar: 'https://randomuser.me/api/portraits/lego/8.jpg',
      },
      {
        user_id: 2,
        username: 'JosÃ©',
        status: 'away',
        avatar: 'https://randomuser.me/api/portraits/lego/6.jpg',
      },
      {
        user_id: 3,
        username: 'Geekster',
        status: 'online',
        avatar: 'https://randomuser.me/api/portraits/lego/3.jpg',
      },
      {
        user_id: 4,
        username: 'Scully Mike',
        status: 'offline',
        avatar: 'https://randomuser.me/api/portraits/lego/4.jpg',
      },
      {
        user_id: 5,
        username: 'Joe Brick',
        status: 'online',
        avatar: 'https://randomuser.me/api/portraits/lego/5.jpg',
      },
      {
        user_id: 6,
        username: 'Magic Marven',
        status: 'offline',
        avatar: 'https://randomuser.me/api/portraits/lego/2.jpg',
      },
    ],
  };
  chatData = {};
}
