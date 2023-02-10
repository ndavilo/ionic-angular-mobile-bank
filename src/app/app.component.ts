import { Component } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController
    ) { }

  onTransferClick() {
    this.navCtrl.navigateForward(['home/transfer']);
    this.menuCtrl.close()
  }

  onDepositClick() {
    this.navCtrl.navigateForward(['home/deposit']);
    this.menuCtrl.close()
  }

  onWithdrawClick() {
    this.navCtrl.navigateForward(['home/withdraw']);
    this.menuCtrl.close()
  }

  onProfileClick() {
    this.navCtrl.navigateForward(['/home/profile']);
    this.menuCtrl.close();
  }
  onCloseClick() {
    this.menuCtrl.close()
  }
  onHomeClick(){
    this.navCtrl.navigateBack(['/home/dashboard']);
    this.menuCtrl.close()
  }
  navigateToSignIn() {
    this.navCtrl.navigateForward(['']);
    this.menuCtrl.close()
  }
}
