import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  isDarkMode = false;

  components = [
    { name: 'Action Sheet', route: '/action-sheet' },
    { name: 'Alert', route: '/alert' },
    { name: 'Button', route: '/button' },
    // Buraya diğer bileşenleri ekleyebilirsiniz
  ];

  constructor(
    private themeService: ThemeService
  ) { }
  
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeService.toggleDarkMode();
  }
  ngOnInit() {
  }

}
