import Rx from 'rxjs';

Rx.Observable
    .interval(100)
    .concatMapTo(Rx.Observable.range(0,10))
    // .concatMap(n=>Rx.Observable.range(0,n+1))
    .subscribe(a=>console.log(a));