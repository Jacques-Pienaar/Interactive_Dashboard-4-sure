import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../models/user.model';

@Component({
  selector: 'app-chat-preview',
  templateUrl: './chat-preview.component.html',
  styleUrls: ['./chat-preview.component.css'],
})
export class ChatPreviewComponent implements OnInit {
  @Input('user') user: any;
  constructor() {}

  ngOnInit(): void {
    // let user = this.user as Users;
    // console.log(user.users.user_id);
    console.log(this.user);
  }
}
