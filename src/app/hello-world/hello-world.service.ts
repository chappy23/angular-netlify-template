import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { HelloWorld } from "./hello-world";
import { map } from 'rxjs/operators';
import { Injectable } from "@angular/core";

@Injectable()
export class HelloWorldService {
    constructor(
        private readonly httpClient: HttpClient,
    ) {
    }

    public getMessage(): Observable<any> {
        return this.httpClient.get(`${environment.apiUrl}/hello-world`)
            .pipe(map(response => new HelloWorld(response)));
    }
}