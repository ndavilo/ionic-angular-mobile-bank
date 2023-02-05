import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recharge-cable',
  templateUrl: './recharge-cable.page.html',
  styleUrls: ['./recharge-cable.page.scss'],
})
export class RechargeCablePage implements OnInit {
  cableProvider: string = '';
  decoderNumber: string = '';
  numberOfMonths: string = '';
  planName: string = '';

  cableProviders = [
    {
      name: 'DSTV',
      value: 'dstv'
    },
    {
      name: 'GOTV',
      value: 'gotv'
    }
  ];

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  buyRechargeCable() {
    // Call the Payment Gateway API to retrieve the relevant information stored on the card
    // this.http.post('https://payment-gateway.com/api/recharge-cable', {
    //   cableProvider: this.cableProvider,
    //   decoderNumber: this.decoderNumber,
    //   numberOfMonths: this.numberOfMonths,
    //   planName: this.planName
    // }).subscribe(data => {
    //   // Handle the response from the Payment Gateway API
    //   console.log(data);
    // });
    this.toastCtrl.create({
      message: 'Recharge Cable purchase successful',
      duration: 3000
    }).then(toast => toast.present());

    // Navigate back to the home page
    // this.router.navigate(['home/dashboard']);
    this.navCtrl.navigateRoot('/home/dashboard');
  }

  backButtonClicked() {
    this.navCtrl.navigateRoot('/home/dashboard');
  }

}
