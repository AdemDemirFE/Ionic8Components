import { Component, OnInit } from '@angular/core';
import { BadgeService } from './badge.service';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.page.html',
  styleUrls: ['./badge.page.scss'],
  standalone: false,
})
export class BadgePage implements OnInit {
  messageCount: number = 0;
  taskCount: number = 0;
  cartItemCount: number = 0;

  constructor(private badgeService: BadgeService) {}

  ngOnInit() {
    this.loadBadgeCounts();
  }

  loadBadgeCounts() {
    this.messageCount = this.badgeService.getMessageCount();
    this.taskCount = this.badgeService.getTaskCount();
    this.cartItemCount = this.badgeService.getCartCount();
  }

  getTaskBadgeColor(): string {
    return this.taskCount > 5 ? 'danger' : 'success';
  }

  incrementCount() {
    this.cartItemCount++;
    this.badgeService.updateCartCount(this.cartItemCount);
  }

  updateBadgeCounts() {
    this.badgeService.refreshCounts().subscribe(() => {
      this.loadBadgeCounts();
    });
  }
}
