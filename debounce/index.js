import Rx from 'rxjs';
import { fromStdIn } from '../utility'

fromStdIn()
    // .debounce(
    //     ()=>Rx.Observable.timer(1000)
    // )
    .debounceTime(1000)
    .subscribe(a=>console.log(a));