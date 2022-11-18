import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastController: ToastController) { }
// alerte box lors de la connexion
  async presentToast(message: any) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      position: 'top',
      color: 'white'
    });
    toast.present();
  }
}
