import Rx from 'rxjs';
import { fromStdIn } from '../utility';

fromStdIn()
    .sample(
        Rx.Observable.interval(1000)
    )
    .subscribe(a=>console.log(a));