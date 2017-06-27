import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { Prototype } from 'app/prototype/shared/prototype.model';

@Injectable()
export class PrototypeService {

constructor() { }

    getMessage(): string {
        return 'test string';
    }

    getMessages(): Observable<Array<Prototype>> {
        return Observable.of(null);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : '';
        console.error(error, errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}