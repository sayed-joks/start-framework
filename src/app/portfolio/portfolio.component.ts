import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  myimg: string[] = [
      '/images/portfolio/poert1.png',
      '/images/portfolio/port2.png',
      '/images/portfolio/port3.png',
      '/images/portfolio/poert1.png',
      '/images/portfolio/port2.png',
      '/images/portfolio/port3.png',
    ];
    showlight(image: String): void {
      let img = document.querySelector('.light') as HTMLElement;
      img.style.backgroundImage = `url(${image})`;
      let light = document.querySelector('.light-container') as HTMLElement;
      light.classList.remove('d-none');
    }
    close(): void {
      let light = document.querySelector('.light-container') as HTMLElement;
      light.classList.add('d-none');
    }
    stopPopgration(e:MouseEvent):void{
    e.stopPropagation();
  }
}
