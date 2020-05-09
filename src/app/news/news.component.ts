import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { products } from '../products';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
images = ['https://raw.githubusercontent.com/phiwesriva/angular-mn8emkeswatinipro-e6w3hm/master/src/assets/Areal.jpg', 'https://raw.githubusercontent.com/phiwesriva/angular-mn8emkeswatinipro-e6w3hm/master/src/assets/Aremax.jpg', 'https://raw.githubusercontent.com/phiwesriva/angular-mn8emkeswatinipro-e6w3hm/master/src/assets/Atech.jpg'];
//.map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
 constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 1500;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.wrap = true;
  }
  products = products;
}