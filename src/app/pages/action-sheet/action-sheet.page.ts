import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { IonActionSheet, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false,
})
export class ActionSheetPage {
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Share',
      data: {
        action: 'share',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];
  
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async openBasicActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Basic Actions',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async openActionSheetWithIcons() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions with Icons',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Play',
          icon: 'play-circle',
          handler: () => {
            console.log('Play clicked');
          },
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async openActionSheetWithSubtitles() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions with Subtitles',
      subHeader: 'Select your option',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          data: {
            subtitle: 'Delete this item permanently'
          },
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          data: {
            subtitle: 'Share with your friends'
          },
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async openCustomStyleActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Custom Style',
      cssClass: 'custom-action-sheet',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          cssClass: 'action-sheet-danger',
          handler: () => {
            console.log('Delete clicked');
          },
        },
        {
          text: 'Share',
          cssClass: 'action-sheet-primary',
          handler: () => {
            console.log('Share clicked');
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
