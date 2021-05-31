import { Component, OnInit } from '@angular/core';
import { NgcCookieConsentService, NgcInitializeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'library';

  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;

  constructor(private cookieConsent: NgcCookieConsentService) {}

  ngOnInit(): void {
    // turns off the consent window if the cookie is already here
    this.initializeSubscription = this.cookieConsent.initialize$.subscribe((event: NgcInitializeEvent) => {
      if (document.cookie.includes('cookieconsent_status')) {
        this.cookieConsent.getConfig().enabled = false;
      }
    })
  }
}

