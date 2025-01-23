import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertResult } from './alert.model';

@Injectable({
  providedIn: 'root',
})
export class AlertService {
  constructor(private alertController: AlertController) {}

  async showAlert(title: string, message: string): Promise<AlertResult> {
    const alert = await this.alertController.create({
      header: title,
      message: message,
      buttons: ['Tamam'],
    });

    await alert.present();
    return { success: true, message: 'Alert gösterildi' };
  }

  async showConfirm(title: string, message: string): Promise<AlertResult> {
    return new Promise(async (resolve) => {
      const alert = await this.alertController.create({
        header: title,
        message: message,
        buttons: [
          {
            text: 'İptal',
            role: 'cancel',
            handler: () => {
              resolve({ success: false, message: 'İşlem iptal edildi' });
            },
          },
          {
            text: 'Tamam',
            handler: () => {
              resolve({ success: true, message: 'İşlem onaylandı' });
            },
          },
        ],
      });

      await alert.present();
    });
  }
} 