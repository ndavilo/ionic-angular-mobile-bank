import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profilePicture!: string;
  fullName: string = 'Ilonze Chukwunonso David';
  phoneNumber: string ='+2348161417166';
  email: string = 'nonsoilonze@gmail.com';
  workAddress: string='VI Lagos';
  accountNumber: string ='488847747643';
  bankName: string = 'Speedpay';

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) { }

  ngOnInit() {
    // Get user profile information from the API
    // this.http.get('https://api.com/user/profile').subscribe(data => {
    //   this.profilePicture = data['profilePicture'];
    //   this.fullName = data['fullName'];
    //   this.phoneNumber = data['phoneNumber'];
    //   this.email = data['email'];
    //   this.workAddress = data['workAddress'];
    //   this.accountNumber = data['accountNumber'];
    //   this.bankName = data['bankName'];
    // });
  };

  navigateToPassword() {
    this.navCtrl.navigateRoot('/home/password');
  }
}




