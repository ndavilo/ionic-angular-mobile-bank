import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  showFirstContent = true;
  showSecondContent = false;
  fullName='';
  phoneNumber='';
  email='';
  workAddress='';
  accountNumber='';
  bankName='';
  nin='';
  bvn='';
  refereeFullName='';
  refereeAddress='';
  refereeNIN='';
  refereeBVN='';
  refereeAccountNumber='';
  refereeBankName='';
  profilePicture='';
  password='';
  confirm_password='';
  payload=[];

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
    // this.payload=[
    //   "fullName"=this.fullName,
    //   "phoneNumber": this.phoneNumber,
    //   "email": this.email,
    //   "workAddress": this.workAddress,
    //   "accountNumber": this.accountNumber,
    //   "bankName": this.bankName,
    //   "NIN": this.NIN,
    //   "BVN": this.BVN,
    //   "refereeFullName": this.refereeFullName,
    //   "refereeAddress": this.refereeAddress,
    //   "refereeNIN": this.refereeNIN,
    //   "refereeBVN": this.refereeBVN,
    //   "refereeAccountNumber": this.refereeAccountNumber,
    //   "refereeBankName": this.refereeBankName,
    //   "profilePicture": this.profilePicture
    // ]
    console.log(this.fullName)
    this.router.navigate(['home/dashboard']);
  }
  next() {
    this.showFirstContent = false;
    this.showSecondContent = true;
  }

  previous() {
    this.showFirstContent = true;
    this.showSecondContent = false;
  }

  backButtonClicked() {
    this.router.navigate(['/']);
  }

}
