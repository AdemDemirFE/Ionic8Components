import { Injectable } from '@angular/core';
import { AccordionItem } from './accordion.model';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {
  constructor() {}

  getAccordionItems(): AccordionItem[] {
    return [
      {
        id: 'first',
        title: 'Birinci Bölüm',
        content: 'İlk bölümün içeriği buraya gelecek. Lorem ipsum dolor sit amet.'
      },
      {
        id: 'second',
        title: 'İkinci Bölüm',
        content: 'İkinci bölümün içeriği buraya gelecek. Consectetur adipiscing elit.'
      }
    ];
  }

  getColorItems(): AccordionItem[] {
    return [
      {
        id: 'colors',
        title: 'Renkler',
        icon: 'palette',
        items: ['Kırmızı', 'Mavi', 'Yeşil'],
        content: ''
      }
    ];
  }

  getAnimalItems(): AccordionItem[] {
    return [
      {
        id: 'animals',
        title: 'Hayvanlar',
        icon: 'paw',
        items: ['Kedi', 'Köpek', 'Kuş'],
        content: ''
      }
    ];
  }
} 