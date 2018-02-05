import Rx from 'rxjs';
import { fromStdIn } from '../utility'

Rx.Observable
    .interval(1000)
    .withLatestFrom( fromStdIn() )
    .subscribe(a=>console.log(a));