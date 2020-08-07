import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../user-data.service';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.css'],
})
export class ContactPreviewComponent implements OnInit {
  userData;
  chatData;
  selectedUser;
  selectedChat;
  selectedMessages;

  constructor(private UserDataService: UserDataService) {}

  ngOnInit(): void {
    this.userData = this.UserDataService.returnUsers();
    this.chatData = this.UserDataService.returnChats();
    console.log(this.chatData);
  }

  onSelect(user) {
    this.selectedUser = user;
    this.chatData.chat.forEach((chat) => {
      if (chat.user_id == user.user_id) {
        this.selectedMessages = chat;
        console.log(this.selectedMessages);
      }
    });
  }
}
