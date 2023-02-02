import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profilePicture!: string;
  fullName!: string;
  phoneNumber!: string;
  email!: string;
  workAddress!: string;
  accountNumber!: string;
  bankName!: string;

  constructor() { }

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
  }
}




