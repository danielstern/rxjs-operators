import Rx from 'rxjs';

console.info("MADE API REQUEST");
Rx.Observable
    .timer(4000,500)
    .map(n=>n+1)
    .startWith(0)
    .subscribe(a=>console.log("REQUEST COMPLETE:", a));