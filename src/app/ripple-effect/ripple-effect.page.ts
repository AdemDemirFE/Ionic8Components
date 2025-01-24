import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ripple-effect',
  templateUrl: './ripple-effect.page.html',
  styleUrls: ['./ripple-effect.page.scss'],
  standalone: false,
})
export class RippleEffectPage implements OnInit {
  // Ripple renkleri için örnekler
  rippleColors = {
    success: '#28ba62',
    warning: '#ffc409',
    danger: '#eb445a',
    primary: '#3880ff'
  };

  // Ürün listesi örneği
  products = [
    { id: 1, name: 'Ürün 1', price: 100 },
    { id: 2, name: 'Ürün 2', price: 200 },
    { id: 3, name: 'Ürün 3', price: 300 },
  ];

  constructor() { }

  ngOnInit() { }

  // Simplified ripple handling
  customRipple(event: CustomEvent) {
    console.log('Ripple effect triggered', event);
  }

  // Ürüne tıklandığında tetiklenecek method
  onProductClick(product: any) {
    console.log(`Seçilen ürün: ${product.name}`);
    // Burada sepete ekleme, detay sayfasına yönlendirme gibi işlemler yapılabilir
  }

  // Buton tıklama işlemi
  onButtonClick(type: string) {
    switch(type) {
      case 'like':
        console.log('Beğeni eklendi');
        break;
      case 'share':
        console.log('Paylaşım yapıldı');
        break;
      case 'save':
        console.log('Kaydedildi');
        break;
    }
  }
}
