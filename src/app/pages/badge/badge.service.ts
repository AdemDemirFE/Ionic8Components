import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {
  private messageCount: number = 0;
  private taskCount: number = 0;
  private cartCount: number = 0;

  constructor() {
    // Initialize with some default values
    this.messageCount = 5;
    this.taskCount = 3;
    this.cartCount = 0;
  }

  getMessageCount(): number {
    return this.messageCount;
  }

  getTaskCount(): number {
    return this.taskCount;
  }

  getCartCount(): number {
    return this.cartCount;
  }

  updateCartCount(count: number): void {
    this.cartCount = count;
  }

  // Simulate API call to refresh counts
  refreshCounts(): Observable<boolean> {
    this.messageCount = Math.floor(Math.random() * 10);
    this.taskCount = Math.floor(Math.random() * 8);
    return of(true).pipe(delay(1000)); // Simulate network delay
  }
} 