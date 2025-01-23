import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AlertService } from './alert.service';
import { AlertResult } from './alert.model';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone: false,
})
export class AlertPage {
  alertResult: string = '';
  result: any;

  // Input Alert seçenekleri
  inputAlertOptions = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Adınız',
    },
    {
      name: 'age',
      type: 'number',
      placeholder: 'Yaşınız',
      min: 1,
      max: 100,
    },
  ];

  // Radio Alert seçenekleri
  radioAlertOptions = [
    {
      type: 'radio',
      label: 'Kırmızı',
      value: 'red',
    },
    {
      type: 'radio',
      label: 'Mavi',
      value: 'blue',
    },
    {
      type: 'radio',
      label: 'Yeşil',
      value: 'green',
    },
  ];

  // Checkbox Alert seçenekleri
  checkboxAlertOptions = [
    {
      type: 'checkbox',
      label: 'Futbol',
      value: 'football',
    },
    {
      type: 'checkbox',
      label: 'Basketbol',
      value: 'basketball',
    },
    {
      type: 'checkbox',
      label: 'Voleybol',
      value: 'volleyball',
    },
  ];

  // Çoklu Buton Alert seçenekleri
  multiButtonAlertOptions = [
    {
      text: 'İptal',
      role: 'cancel',
      cssClass: 'alert-button-cancel',
    },
    {
      text: 'Sil',
      role: 'destructive',
      cssClass: 'alert-button-delete',
    },
    {
      text: 'Tamam',
      role: 'confirm',
      cssClass: 'alert-button-confirm',
    },
  ];

  constructor(
    private alertController: AlertController,
    private alertService: AlertService
  ) {}

  async presentBasicAlert() {
    const alert = await this.alertController.create({
      header: 'Basit Alert',
      subHeader: 'Alt Başlık',
      message: 'Bu bir basit alert mesajıdır.',
      buttons: ['Tamam'],
    });

    await alert.present();
    this.alertResult = 'Basit alert gösterildi';
  }

  async presentMultipleButtonsAlert() {
    const alert = await this.alertController.create({
      header: 'Çoklu Buton',
      message: 'Lütfen bir seçenek seçin:',
      buttons: [
        {
          text: 'İptal',
          role: 'cancel',
          handler: () => {
            this.alertResult = 'İptal seçildi';
          },
        },
        {
          text: 'Sil',
          role: 'destructive',
          handler: () => {
            this.alertResult = 'Sil seçildi';
          },
        },
        {
          text: 'Tamam',
          handler: () => {
            this.alertResult = 'Tamam seçildi';
          },
        },
      ],
    });

    await alert.present();
  }

  async presentPromptAlert() {
    const alert = await this.alertController.create({
      header: 'Input Alert',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Adınızı girin',
        },
        {
          name: 'age',
          type: 'number',
          placeholder: 'Yaşınızı girin',
        },
      ],
      buttons: [
        {
          text: 'İptal',
          role: 'cancel',
        },
        {
          text: 'Tamam',
          handler: (data) => {
            this.alertResult = `Ad: ${data.name}, Yaş: ${data.age}`;
          },
        },
      ],
    });

    await alert.present();
  }

  async presentRadioAlert() {
    const alert = await this.alertController.create({
      header: 'Radio Alert',
      inputs: [
        {
          type: 'radio',
          label: 'Kırmızı',
          value: 'red',
        },
        {
          type: 'radio',
          label: 'Mavi',
          value: 'blue',
        },
        {
          type: 'radio',
          label: 'Yeşil',
          value: 'green',
        },
      ],
      buttons: [
        {
          text: 'İptal',
          role: 'cancel',
        },
        {
          text: 'Tamam',
          handler: (data) => {
            this.alertResult = `Seçilen renk: ${data}`;
          },
        },
      ],
    });

    await alert.present();
  }

  async presentCheckboxAlert() {
    const alert = await this.alertController.create({
      header: 'Checkbox Alert',
      inputs: [
        {
          type: 'checkbox',
          label: 'Futbol',
          value: 'football',
        },
        {
          type: 'checkbox',
          label: 'Basketbol',
          value: 'basketball',
        },
        {
          type: 'checkbox',
          label: 'Voleybol',
          value: 'volleyball',
        },
      ],
      buttons: [
        {
          text: 'İptal',
          role: 'cancel',
        },
        {
          text: 'Tamam',
          handler: (data) => {
            this.alertResult = `Seçilen sporlar: ${data.join(', ')}`;
          },
        },
      ],
    });

    await alert.present();
  }

  // Alert sonuçlarını işleme
  setResult(ev: any) {
    this.result = {
      role: ev.detail.role,
      data: ev.detail.data,
      id: ev.target.id
    };
  }
}
