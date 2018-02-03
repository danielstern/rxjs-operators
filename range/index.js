import Rx from 'rxjs';

const rangeObservable = Rx.Observable.range(0,16);
rangeObservable
    .subscribe(e=>console.log(`Range emitted ${e}`));