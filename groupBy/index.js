import Rx from 'rxjs';

Rx.Observable
    .range(1,20)
    .groupBy(n=>n % 3)
    .mergeMap(nGroup=>nGroup.toArray())
    .subscribe(a=>console.log(a));