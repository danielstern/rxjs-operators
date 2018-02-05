import Rx from 'rxjs';

const buggyAPI = Rx.Observable
    .timer(1000)
    .do(a=>console.log("You called the buggy API!"))
    .do(a=>{throw new Error()});

buggyAPI
    // .retry(3)
    .retryWhen(()=>Rx.Observable.interval(1000))
    .subscribe(a=>console.log(a))