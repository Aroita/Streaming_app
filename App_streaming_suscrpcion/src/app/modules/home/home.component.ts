import { Component } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/shared/config/config';

declare var $:any;
declare function HOME_INIT([]):any;
declare function INIT_SWIPER([]):any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit(): void {
    console.log(URL_SERVICIOS);
    setTimeout(() => {
      HOME_INIT($);
      INIT_SWIPER($);
    }, 50)

  }

}
