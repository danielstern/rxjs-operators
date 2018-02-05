import Rx from 'rxjs';
import { fromStdIn } from '../utility';

Rx.Observable.of(
    Rx.Observable.range(1,3),
    Rx.Observable.interval(100).take(10),
    fromStdIn()
)
    .concatAll()
    .subscribe(a=>console.log(a));