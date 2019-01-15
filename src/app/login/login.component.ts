import { Component, OnInit } from '@angular/core';
import { DemoService } from 'app/shared/services/demo.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-login',
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {

    public FLAG: boolean;

    constructor(public demoService: DemoService,private router: Router) {
        this.FLAG = demoService.FLAG;
    }

    ngOnInit() {

    }

    flag() {
        this.demoService.FLAG = true;
        this.router.navigateByUrl('/dashboard');
    }
}
