import Rx from 'rxjs';

const range = Rx.Observable
    .interval(400)
    .filter(n=>n % 2 != 0)
    .subscribe(a=>console.log(a));