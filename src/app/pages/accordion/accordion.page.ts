import { Component, OnInit } from '@angular/core';
import { AccordionService } from './accordion.service';
import { AccordionItem } from './accordion.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
  standalone: false,
})
export class AccordionPage implements OnInit {
  accordionItems: AccordionItem[] = [];
  colorItems: AccordionItem[] = [];
  animalItems: AccordionItem[] = [];

  constructor(private accordionService: AccordionService) {}

  ngOnInit() {
    this.accordionItems = this.accordionService.getAccordionItems();
    this.colorItems = this.accordionService.getColorItems();
    this.animalItems = this.accordionService.getAnimalItems();
  }

  // Accordion değişikliklerini dinlemek için
  accordionGroupChange(event: any) {
    console.log('Değişen accordion değeri:', event.detail.value);
  }
}
