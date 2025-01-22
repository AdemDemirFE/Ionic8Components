import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  standalone: false,
})
export class ActionSheetPage {
  constructor(private actionSheetCtrl: ActionSheetController) {}

  async openActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Actions',
      buttons: [
        { text: 'Delete', role: 'destructive' },
        { text: 'Share' },
        { text: 'Cancel', role: 'cancel' },
      ],
    });
    await actionSheet.present();
  }
}
