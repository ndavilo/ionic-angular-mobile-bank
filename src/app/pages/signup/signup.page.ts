import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  fullName!: string;
  phoneNumber!: string;
  email!: string;
  workAddress!: string;
  accountNumber!: string;
  bankName!: string;
  nin!: string;
  bvn!: string;
  refereeFullName!: string;
  refereeAddress!: string;
  refereeNIN!: string;
  refereeBVN!: string;
  refereeAccountNumber!: string;
  refereeBankName!: string;
  profilePicture!: string;
  password!:string;
  confirm_password!:string;

  constructor(
    //private http: HttpClient,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  register() {
    // Call the API to register the user
    // this.http.post('https://your-api.com/register', {
    //   fullName: this.fullName,
    //   phoneNumber: this.phoneNumber,
    //   email: this.email,
    //   workAddress: this.workAddress,
    //   accountNumber: this.accountNumber,
    //   bankName: this.bankName,
    //   NIN: this.NIN,
    //   BVN: this.BVN,
    //   refereeFullName: this.refereeFullName,
    //   refereeAddress: this.refereeAddress,
    //   refereeNIN: this.refereeNIN,
    //   refereeBVN: this.refereeBVN,
    //   refereeAccountNumber: this.refereeAccountNumber,
    //   refereeBankName: this.refereeBankName,
    //   profilePicture: this.profilePicture
    // }).subscribe(data => {
    //   // Handle the response from the API
    //   console.log(data);
    // });
    this.router.navigate(['home/dashboard']);
  }

}
