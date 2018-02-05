import Rx from 'rxjs';

const countryObservable = Rx.Observable.fromEvent(
    document.getElementById('country'),
    "change",
    e=>e.target.value
);

const cityObservable = Rx.Observable.fromEvent(
    document.getElementById("city"),
    "change",
    e=>e.target.value
);

Rx.Observable.combineLatest(
    countryObservable,
    cityObservable
)
.subscribe(a=>console.log(a));