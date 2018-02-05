import Rx from 'rxjs';

Rx.Observable
    .range(0,3)
    .single(n=>n % 2 == 0)
    .subscribe(a=>console.log(a));