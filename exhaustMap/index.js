import Rx from 'rxjs';

const slowDataProcess = (n)=>Rx.Observable.timer(5000).mapTo(n);

const fasterInterval = Rx.Observable
    .interval(700)
    .exhaustMap(n=>slowDataProcess(n))
    .subscribe(a=>console.log(a));