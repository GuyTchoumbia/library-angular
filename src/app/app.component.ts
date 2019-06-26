import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'library';
  cookieMessage ='This Website uses cookies to ensure you get the best experience on our Website';
  cookieDismiss = 'Got It!';
  cookieLinkText = 'Learn More';

  ngOnInit(): void {
    const cc = window as any;
    cc.cookieconsent.initialise({
         palette: {
           popup: {
             background: '#164969'
           },
           button: {
             background: '#ffe000',
             text: '#164969'
           }
         },
         theme: 'classic',
         content: {
           message: this.cookieMessage,
           dismiss: this.cookieDismiss,
           link: this.cookieLinkText,
           href: ''// environment.Frontend + '/dataprivacy' 
         }
       });
  }
}

