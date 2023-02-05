import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  accountNumber!: string;
  amount!: number;

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
  }

  deposit() {
    // Code to deposit funds into an account (e.g. using a banking API)
    // ...

    // Show a toast message to confirm the deposit was successful
    this.toastCtrl.create({
      message: 'Deposit successful',
      duration: 3000
    }).then(toast => toast.present());

    // Navigate back to the home page
    this.navCtrl.navigateRoot('/home/dashboard');
  }
  backButtonClicked() {
    this.navCtrl.navigateRoot('/home/dashboard');
  }

}
