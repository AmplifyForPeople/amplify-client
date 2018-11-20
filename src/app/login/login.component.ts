import { Component, OnInit } from '@angular/core';
import { DemoService } from 'app/shared/services/demo.service';

@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit{

    public FLAG:boolean;

    constructor(public demoService: DemoService){
        this.FLAG = demoService.FLAG; 
    }

    ngOnInit() {

    }
 
    
    flag() {
        this.demoService.FLAG = true;
    }
}
