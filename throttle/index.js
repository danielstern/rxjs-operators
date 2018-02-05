import { fromStdIn } from '../utility'

fromStdIn()
    .throttle(
        ()=>fromStdIn().filter(key=>key==="p")
    )
    // .throttleTime(1000)
    .subscribe(a=>console.log(a));