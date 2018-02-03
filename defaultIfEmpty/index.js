import Rx from 'rxjs';

Rx.Observable
    .empty()
    .defaultIfEmpty(42)
    .subscribe(a=>console.log("Where's the value???",a));