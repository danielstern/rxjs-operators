import Rx from 'rxjs';

const slowNumberObservable = Rx.Observable.interval(100);
const slowSquareObservable = Rx.Observable.interval(350).map(n=>n*n);

Rx.Observable.zip(
    slowNumberObservable,
    slowSquareObservable
)
    .subscribe(a=>console.log(a));
// slowNumberObservable.subscribe(a=>console.log(a));
// slowSquareObservable.subscribe(a=>console.log(a));