import Rx from 'rxjs';

Rx.Observable.interval(100)
    .first()
    .subscribe(a=>console.log(a));