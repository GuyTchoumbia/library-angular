import { Component, OnInit, Input } from '@angular/core';
import { UserCote } from '../../classes/userCote';

@Component({
  selector: 'app-emprunt',
  templateUrl: './emprunt.component.html',
  styleUrls: ['./emprunt.component.css']
})
export class EmpruntComponent implements OnInit {

  @Input() userCote: UserCote;

  constructor() { }

  ngOnInit() {
  }

}
