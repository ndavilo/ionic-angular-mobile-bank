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
  accountBalance!: number;
  transactions!: string[];

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

}
