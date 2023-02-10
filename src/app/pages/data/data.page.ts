import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  mobileNumber: string ='';
  selectedDataVolume: string ='';
  dataVolumes = [
    {value: '500MB', label: '500 MB', price: 10},
    {value: '1GB', label: '1 GB', price: 15},
    {value: '2GB', label: '2 GB', price: 25},
    {value: '5GB', label: '5 GB', price: 40}
  ];

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }


  buyData() {
    // Call the Payment Gateway API to make the data purchase
    //   this.http.post('https://payment-gateway.com/api/buy-data', {
    //     mobileNumber: this.mobileNumber,
    //     dataVolume: this.selectedDataVolume
    //   }).subscribe(data => {
    //     // Handle the response from the Payment Gateway API
    //     console.log(data);
    //   });
    this.toastCtrl.create({
      message: 'Data purchase successful',
      duration: 3000
    }).then(toast => toast.present());

    // Navigate back to the home page
    this.navCtrl.navigateRoot('/home/dashboard');
  }
  backButtonClicked() {
    this.navCtrl.navigateRoot('/home/dashboard');
  }

}
