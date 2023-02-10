import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  navigateToLoginPage(){
    this.navCtrl.navigateForward(['login'])
  }

}
