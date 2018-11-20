import { Injectable } from '@angular/core';

@Injectable()
export class DemoService {

public FLAG = false;

  constructor() { }
    swap(){
        this.FLAG = false;
    }
}