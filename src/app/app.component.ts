import { Component } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { $ } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[NgbCarouselConfig]
})
export class AppComponent {

  constructor(){
    
  }
}