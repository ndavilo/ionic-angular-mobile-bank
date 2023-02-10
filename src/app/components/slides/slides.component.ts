import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
})
export class SlidesComponent implements OnInit {
  year: number = new Date().getFullYear();
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor(private navCtrl: NavController,) { }

  ngOnInit() {}

  navigateToSignUp(){
    this.navCtrl.navigateForward(['signup'])
  }

}
