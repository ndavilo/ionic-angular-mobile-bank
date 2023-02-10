import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  selectedValue = 'light';
  isDarkMode = false;
  fullName='';
  phoneNumber='';
  accountBalance= 'N 100,000.00';
  showTransactions = false;
  showBalance = false;
  services = [
    { name: 'Airtime', icon: 'call' },
    { name: 'Data', icon: 'wifi' },
    { name: 'Cable TV', icon: 'tv' },
    { name: 'Power', icon: 'sunny' }
  ];
  transactions = [
    { date: "2022-12-30", description: "Online Purchase", amount: "-50.00" },
    { date: "2022-12-29", description: "Salary Deposit", amount: "3000.00" },
    { date: "2022-12-28", description: "ATM Withdrawal", amount: "-200.00" },
    { date: "2022-12-27", description: "Grocery Shopping", amount: "-100.00" },
    { date: "2022-12-26", description: "Gas Station", amount: "-50.00" },
  ];


  constructor(
    //private http: HttpClient
    private router: Router,
    private navCtrl: NavController,
    ) { }

  ngOnInit() {
    // this.http.get('https://api.posapp.com/user').subscribe(data => {
    //   this.fullName = data['fullName'];
    //   this.phoneNumber = data['phoneNumber'];
    //   this.accountBalance = data['accountBalance'];
    //   this.transactions = data['transactions'];
    // });
  }
  navigateToDeposit(){
    this.navCtrl.navigateForward(['home/deposit'])
  }
  navigateToTransfer(){
    this.navCtrl.navigateForward(['home/transfer'])
  }
  navigateToSignIn() {
    this.navCtrl.navigateForward([''])
  }
  navigateToWithdrawt(){
    this.navCtrl.navigateForward(['home/withdraw'])
  }

  handleClick(service:any) {
    console.log(service);
    if(service.name==='Airtime'){
      this.navCtrl.navigateForward(['home/recharge'])
    }
    if(service.name==='Data'){
      this.navCtrl.navigateForward(['home/data'])
    }
    if(service.name==='Cable TV'){
      this.navCtrl.navigateForward(['home/recharge-cable'])
    }
    if(service.name==='Power'){
      this.navCtrl.navigateForward(['home/buy-power'])
    }
  }

  navigateToProfile(){
    this.navCtrl.navigateForward(['home/profile'])
  }
  navigateToPassword() {
    this.navCtrl.navigateRoot('/home/password');
  }

}
