import { Component, OnInit } from '@angular/core';
import { ButtonService } from './button.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.page.html',
  styleUrls: ['./button.page.scss'],
  standalone: false,
})
export class ButtonPage implements OnInit {
  isLoading: boolean = false;
  buttonClicks: number = 0;

  constructor(private buttonService: ButtonService) {}

  ngOnInit() {
    this.buttonService.getInitialCount().subscribe(count => {
      this.buttonClicks = count;
    });
  }

  async handleClick(buttonType: string) {
    this.isLoading = true;
    try {
      const result = await this.buttonService.processButtonClick(buttonType);
      console.log(`Button ${buttonType} clicked:`, result);
      this.buttonClicks++;
    } catch (error) {
      console.error('Error:', error);
    } finally {
      this.isLoading = false;
    }
  }

  async showButtonGroup() {
    const result = await this.buttonService.handleButtonGroup();
    console.log('Button group action:', result);
  }

  toggleLoading() {
    this.isLoading = !this.isLoading;
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
