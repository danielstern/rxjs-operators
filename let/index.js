import Rx from 'rxjs';

Rx.Observable
    .interval(1000)
    .let(source=>Rx.Observable.interval(100))
    .subscribe(a=>console.log(a));