import Rx from 'rxjs';

const shared = new Rx.BehaviorSubject(-1);
const currencyTicker = Rx.Observable
    .interval(1000)
    .do(a=>console.log("PINGED API"))
    .map(n=>`Currency Info #${n} - [placeholder]`)
    // .share()
    // .publish()
    .multicast(shared)

currencyTicker
    .subscribe(a=>console.log("LEFT WIDGET",a));

currencyTicker
    .subscribe(a=>console.log("RIGHT WIDGET",a));

currencyTicker.connect();