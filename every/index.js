import Rx from 'rxjs';

const range = Rx
    .Observable
    .interval(100)
    .take(100)

range
    .map(n=>n*2)
    .do(v=>console.log("Value::",v))
    .every(n=>n % 2 == 0)
    .subscribe(b=>console.log(b));