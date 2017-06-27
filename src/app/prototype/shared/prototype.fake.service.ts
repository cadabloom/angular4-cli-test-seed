import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Prototype } from 'app/prototype/shared/prototype.model';
import 'rxjs/add/observable/of';

@Injectable()
export class PrototypeFakeService {

    constructor() { }

    getMessage(): string {
        return 'fake service string';
    }

    getMessages() : Observable<Prototype[]> {
        let data = new Array<Prototype>();
        data.push(new Prototype('test', 'role 1'));
        data.push(new Prototype('test 2', 'role 2'));
        return Observable.of(data);
    }
    
}