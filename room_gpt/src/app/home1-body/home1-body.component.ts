import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-home1-body',
  templateUrl: './home1-body.component.html',
  styleUrls: ['./home1-body.component.scss']
})
export class Home1BodyComponent {
  images: string[] = [
    '../../assets/sample-1.png',
    '../../assets/sample-2.png',
    '../../assets/sample-3.png',
    '../../assets/sample-4.png',
    '../../assets/sample-5.png',
    '../../assets/sample-6.png',
    '../../assets/sample-7.png',
    '../../assets/sample-8.png',
    '../../assets/sample-9.png',
    '../../assets/sample-10.png'
  ];
  responsiveOptions: any;

  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {

    this.primengConfig.ripple = true;

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
        numScroll: 1
      },
      {
        breakpoint: '768px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1
      }
    ];
  }

  
}
