import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {
  private clickCount: number = 0;

  constructor() {}

  getInitialCount(): Observable<number> {
    return of(this.clickCount).pipe(delay(500));
  }

  async processButtonClick(buttonType: string): Promise<string> {
    // Simüle edilmiş async işlem
    await new Promise(resolve => setTimeout(resolve, 1000));
    this.clickCount++;
    return `${buttonType} işlemi tamamlandı`;
  }

  async handleButtonGroup(): Promise<string> {
    // Simüle edilmiş grup işlemi
    await new Promise(resolve => setTimeout(resolve, 800));
    return 'Buton grup aksiyonu tamamlandı';
  }

  resetCount(): void {
    this.clickCount = 0;
  }
} 