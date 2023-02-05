import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.page.html',
  styleUrls: ['./recharge.page.scss'],
})
export class RechargePage implements OnInit {
  mobileNumber: string = '';
  amount: string = '';

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() { }

  buyAirtime() {
    // Call the payment gateway API to buy airtime or data for the mobile line
    // this.http.post('https://payment-gateway.com/api/buy-airtime', {
    //   mobileNumber: this.mobileNumber,
    //   amount: this.amount
    // }).subscribe(data => {
    //   // Handle the response from the payment gateway API
    //   console.log(data);
    // });

    this.toastCtrl.create({
      message: 'Airtime/data purchase successful',
      duration: 3000
    }).then(toast => toast.present());

    this.navCtrl.navigateRoot('/home/dashboard');
  }

  backButtonClicked() {
    this.navCtrl.navigateRoot('/home/dashboard');
  }
}
