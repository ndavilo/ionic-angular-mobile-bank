import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';

@Injectable({
  providedIn: 'root'
})
export class BootService {
  async start() {
    const { App } = Plugins;
    await App.start();
  }
}
