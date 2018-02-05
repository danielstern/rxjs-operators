import Rx from 'rxjs';

const [even,odds] = Rx.Observable
    .range(1,20)
    .partition(n=>n % 2 == 0);
    //.subscribe(a=>console.log(a));

even.subscribe(a=>console.log("EVEN:",a));
odds
    .map(n=>`ODD: ${n}`)
    .subscribe(a=>console.log(a));