import Rx from 'rxjs';

const interval = Rx.Observable.interval(1000);

interval
    .map(n=>n*n)
    .do(n=>console.log("N after Map#1::",n))
    .map(n=>n / 3)
    .do(n=>console.log("N after Map#2::",n))
    .map(n=>n * n * n)
    .do(n=>console.log("N after Map#3::",n))
    .map(n=>n % 42)
    .do(n=>console.log("N after Map#4::",n))
    .subscribe(a=>console.log(a));