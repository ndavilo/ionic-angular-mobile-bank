import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  accountNumber!: string;
  password!: string;

  constructor(
    // private http: HttpClient,
    private navCtrl: NavController,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  login() {
    // Call the API to verify the account number and password
    // this.http.post('https://api.your-pos-app.com/login', {
    //   accountNumber: this.accountNumber,
    //   password: this.password
    // }).subscribe(data => {
    //   // Handle the response from the API
    //   if (data['status'] === 'success') {
    //     this.navCtrl.navigateForward('/dashboard');
    //   } else {
    //     this.alertCtrl.create({
    //       header: 'Error',
    //       message: 'Invalid account number or password. Please try again.',
    //       buttons: ['OK']
    //     }).then(alert => alert.present());
    //   }
    // });
    this.router.navigate(['home/dashboard']);
  }

}
