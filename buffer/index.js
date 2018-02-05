import { fromStdIn } from '../utility'
import Rx from 'rxjs';

fromStdIn()
    // .buffer(
    //     fromStdIn().filter(key=>key==='p')
    // )
    // .bufferCount(10)
    // .bufferTime(1000)
    // .bufferToggle(
    //     fromStdIn().filter(key=>key==='p'),
    //     ()=>fromStdIn().filter(key=>key==='o')
    // )
    .bufferWhen(
        ()=>Rx.Observable.timer(1000)
    )
    .subscribe(e=>console.log(e));