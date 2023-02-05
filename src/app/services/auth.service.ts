import { AuthConstants } from './../config/auth-constants';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData$ = new BehaviorSubject<any>('');
  constructor(
    private httpservice:HttpService,
    private storageservice: StorageService,
    private router: Router,
    ) { }

  getUserData(){
    this.storageservice.get(AuthConstants.AUTH).then(res =>{
      console.log(res);
      this.userData$.next(res);
    });
  }
  login(postData:any): Observable<any>{
    return this.httpservice.post(`pos_customer_login/`, postData)
  }
  signup(postData:any): Observable<any>{
    return this.httpservice.post('createPOSUser/', postData)
  }
  logout(){
    this.userData$.next('');
    this.storageservice.clear()
    this.router.navigate([''])
  }
}
