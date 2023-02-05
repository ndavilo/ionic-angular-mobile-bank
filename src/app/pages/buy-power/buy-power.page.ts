import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-buy-power',
  templateUrl: './buy-power.page.html',
  styleUrls: ['./buy-power.page.scss'],
})
export class BuyPowerPage implements OnInit {
  meterNumber: string = '';
  location: string = '';
  amount: string = '';

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  buyPower() {
    // Call the Power Company API to retrieve the relevant information stored on the meter
    // this.http.post('https://power-company.com/api/buy-power', {
    //   meterNumber: this.meterNumber,
    //   location: this.location,
    //   amount: this.amount
    // }).subscribe(data => {
    //   // Handle the response from the Power Company API
    //   console.log(data);
    // });
    this.toastCtrl.create({
      message: 'Purchase successful',
      duration: 3000
    }).then(toast => toast.present());

    // Navigate back to the home page
    this.navCtrl.navigateRoot('/home/dashboard');
  }

  backButtonClicked() {
    this.navCtrl.navigateRoot('/home/dashboard');
  }
}

