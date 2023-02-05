import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
})
export class WithdrawPage implements OnInit {
  cardNumber!: string;
  cvv!: string;
  pin!: string;
  expirationDate!: string;
  amount!: number;

  constructor(
    private http: HttpClient,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  makeWithdrawal() {
   // Call the Payment Gateway API to retrieve the relevant information stored on the card
  //   this.http.post('https://payment-gateway.com/api/withdrawal', {
  //     cardNumber: this.cardNumber,
  //     cvv: this.cvv,
  //     expirationDate: this.expirationDate,
  //     amount: this.amount
  //     pin:this.pin
  //   }).subscribe(data => {
  //     // Handle the response from the Payment Gateway API
  //     console.log(data);
  //   });
    this.toastCtrl.create({
      message: 'Withdrawal successful',
      duration: 3000
    }).then(toast => toast.present());

    // Navigate back to the home page
    //this.router.navigate(['home/dashboard']);
    this.navCtrl.navigateRoot('/home/dashboard');
  }
  backButtonClicked() {
    this.navCtrl.navigateRoot('/home/dashboard');
  }

}
