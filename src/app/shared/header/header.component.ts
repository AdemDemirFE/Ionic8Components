import { Component, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false,
})
export class HeaderComponent {
  @Input() title: string = '';
  @Input() infoUrl: string = '';

  isDarkMode = false;

  constructor(private navCtrl: NavController, private themeService: ThemeService) {}

  goBack() {
    this.navCtrl.back();
  }

  openInfoPage() {
    if (this.infoUrl) {
      window.open(this.infoUrl, '_blank');
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleDarkMode();
  }

  ngOnInit() {
    this.isDarkMode = this.themeService.isDarkModeEnabled();
  }
}
