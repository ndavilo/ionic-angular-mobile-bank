import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
  cardNumber!: string;
  cvv!: string;
  pin!: string;
  expirationDate!: string;
  amount!: number;
  accountNumber!: string;

  constructor(
    //private http: HttpClient,
    private navCtrl: NavController,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  makeTransfer() {
    // Call the Payment Gateway API to retrieve the relevant information stored on the card and transfer into the account number
    // this.http.post('https://payment-gateway.com/api/transfer', {
    //   cardNumber: this.cardNumber,
    //   cvv: this.cvv,
    //   expirationDate: this.expirationDate,
    //   amount: this.amount,
    //   accountNumber: this.accountNumber
    // }).subscribe(data => {
    //   // Handle the response from the Payment Gateway API
    //   console.log(data);
    // });
    this.toastCtrl.create({
      message: 'Transfer successful',
      duration: 3000
    }).then(toast => toast.present());

    // Navigate back to the home page
    this.router.navigate(['home/dashboard']);
  }
  backButtonClicked() {
    this.navCtrl.navigateRoot('/home/dashboard');
  }

}
