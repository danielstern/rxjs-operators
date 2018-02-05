import Rx from 'rxjs';

Rx.Observable
    // .range(1,9)
    .interval(100)
    .take(10)
    .last(n=> n % 2 == 0)
    .subscribe(a=>console.log(a));