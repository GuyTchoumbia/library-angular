import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserCote } from '../../classes/userCote';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit {

  @Input() userCote: UserCote;
  @Output() extendEvent = new EventEmitter<UserCote>();

  constructor() { }

  ngOnInit() {
  }

  extend(userCote: UserCote) {
    this.extendEvent.emit(userCote);
  }

}
