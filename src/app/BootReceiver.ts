import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class BootReceiver {
  async onReceive() {
    const { SplashScreen } = Plugins;
    await SplashScreen.show({
      autoHide: false
    });
  }
}
