import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private darkMode = false;

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    const theme = this.darkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('theme', theme);
  }

  isDarkModeEnabled(): boolean {
    const currentTheme = document.documentElement.getAttribute('theme');
    return currentTheme === 'dark';
  }
}