import Rx from 'rxjs';

console.log("interval's started!");
Rx.Observable
    .interval(100)
    .take(20)
    .ignoreElements()
    .subscribe({
        next:a=>console.log(a),
        complete:a=>console.log("COMPLEEEETE!", a),
    });