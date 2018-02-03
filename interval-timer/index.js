import Rx from 'rxjs';

const stopWatch = Rx.Observable.timer(2000,1000);

stopWatch.subscribe(a=>console.log("A", a));