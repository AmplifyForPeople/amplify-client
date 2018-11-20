import { Component } from '@angular/core';
import { DemoService } from './shared/services/demo.service';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  public FLAG:boolean;
  constructor(public demoService: DemoService) {
   this.FLAG = demoService.FLAG; 
  }
getFlag() {
  return this.demoService.FLAG;
}

}
