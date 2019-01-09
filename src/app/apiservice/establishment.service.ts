import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class EstablishmentService {
    constructor(private http: HttpClient) { }

    TryConnect() {
        let data;
        const url = 'http://brain.3utilities.com/AmplifyWeb/rest/establishments/1';

        const header = new HttpHeaders({ 'Accept': 'application/json', 'Access-Control-Allow-Origin': '*' });
        // header.append('Access-Control-Allow-Methods', 'GET, POST');
        // header.append('Access-Control-Allow-Origin', '*');

        return new Promise(resolve => {
            this.http.get(url, { headers: header }).subscribe(val => { data = val; });
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
    }

    TryPost(data) {
        const url = 'http://brain.3utilities.com/AmplifyWeb/rest/song/' + data;
        const header = new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });


        return new Promise(resolve => {
            this.http.post(url, { headers: header }).subscribe(val => { data = val; });
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
    }

    async getData() {
        const response = await this.TryConnect();
        return response;
    }

    async postData(data) {
        return await this.TryPost(data);

    }
}