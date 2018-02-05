import Rx from 'rxjs';

Rx.Observable
    //.range(1,9)
    .interval(100)
    .takeUntil(Rx.Observable.timer(2000))
    // .takeWhile(n=> n < 7)
    // .take(5)
    .subscribe(e=>console.log(e));