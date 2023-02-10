import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  showMenu = false;

  constructor(
    private platform: Platform,
    private navCtrl: NavController
    ) {}

  ngOnInit() {
    this.platform.ready().then(() => {
      if (this.platform.is('desktop')) {
        this.showMenu = true;
      }
    });
  }
  navigateToSignIn() {
    this.navCtrl.navigateForward(['']);
  }

}
