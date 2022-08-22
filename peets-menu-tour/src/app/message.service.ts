import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // messages data 
  messages: string[] = [];

  // add a message to the messages array
  add(message: string) {
    this.messages.push(message);
  }

  // delete all messages
  clear() {
    this.messages = [];
  }

  constructor() { }
}
