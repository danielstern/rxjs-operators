import Rx from 'rxjs';
import { fromStdIn } from '../utility'

console.log("INPUT IS OFFICIALLY ACCEPTED IN 2X SECONDS");
fromStdIn()
    // .skip(10)
    //.skipWhile(v=>v !== "g")
    .skipUntil(Rx.Observable.timer(2000))
    .subscribe(k=>console.log(k));
