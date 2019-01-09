import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SongService {
    constructor(private http: HttpClient) { }

    TryConnect() {
        let data;
        const url = '';

        return new Promise(resolve => {
            this.http.get(url).subscribe(val => { data = val; });
            setTimeout(() => {
                resolve(data);
            }, 2000);
        });
    }

    async getData() {
        const k = await this.TryConnect();
        return k;
    }

    async postData(data) {
        const url = '';
        return this.http.post(url, data)

    }
}
