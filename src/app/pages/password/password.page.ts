import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(
    private alertController: AlertController,
    private router: Router
    ) { }

  changePassword() {
    if (!this.currentPassword || !this.newPassword || !this.confirmPassword) {
      this.errorMessage = 'All fields are required';
      return;
    }

    if (this.newPassword.length < 8) {
      this.errorMessage = 'Password must be at least 8 characters';
      return;
    }

    if (!/[a-z]/.test(this.newPassword) || !/[A-Z]/.test(this.newPassword) || !/[0-9]/.test(this.newPassword) || !/[!@#$%^&*]/.test(this.newPassword)) {
      this.errorMessage = 'Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character';
      return;
    }

    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = 'New password and confirm password do not match';
      return;
    }

    this.errorMessage = '';

    // Call the API to change password
    this.presentAlert();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Success',
      message: 'Password changed successfully',
      buttons: ['OK']
    });

    await alert.present();
  }

  backButtonClicked() {
    this.router.navigate(['/home/profile']);
  }
}
