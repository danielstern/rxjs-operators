import Rx from 'rxjs';
import { fromStdIn } from '../utility'

Rx.Observable
    .interval(100)
    // .window(
    //     Rx.Observable.interval(1000)
    // )
    // .windowCount(10)
    // .windowTime(1000)
    // .windowToggle(
    //     fromStdIn().filter(key=>key==="p"),
    //     ()=>fromStdIn().filter(key=>key==="o"),
    // )
    .windowWhen(
        ()=>Rx.Observable.timer(1000)
    )
    .concatMap(a=>a.toArray())
    .subscribe(a=>console.log(a));