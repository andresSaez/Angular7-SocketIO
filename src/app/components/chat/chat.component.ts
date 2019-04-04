import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  texto = '';

  constructor() { }

  ngOnInit() {
  }

  enviar() {
    console.log(this.texto);

    this.texto = '';
  }

}
