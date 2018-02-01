import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CommunicationService {
    private loadHotels = new Subject<any>();
    public $loadHotels = this.loadHotels.asObservable();

    getHotelsWithParams(id, name, stars) {
        const payload = { id, name, stars };
        
        this.loadHotels.next(payload);
    }

}
