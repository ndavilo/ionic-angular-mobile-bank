import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  fullName!: string;
  phoneNumber!: string;
  accountBalance:string = 'N 100,000.00';
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
    this.router.navigate(['home/deposit'])
  }
  navigateToTransfer(){
    this.router.navigate(['home/transfer'])
  }
  navigateToSignIn() {
    this.router.navigate([''])
  }
  navigateToWithdrawt(){
    this.router.navigate(['home/withdraw'])
  }

  handleClick(service:any) {
    console.log(service);
    if(service.name==='Airtime'){
      this.router.navigate(['home/recharge'])
    }
    if(service.name==='Data'){
      this.router.navigate(['home/data'])
    }
    if(service.name==='Cable TV'){
      this.router.navigate(['home/recharge-cable'])
    }
    if(service.name==='Power'){
      this.router.navigate(['home/buy-power'])
    }
  }
  
  navigateToProfile(){
    this.router.navigate(['home/profile'])
  }

}
