import Rx from 'rxjs';
import { fromStdIn } from '../utility'

console.log("Please INPUT your password QUICKLY!!");

fromStdIn()
    .take(10)
    .timeout(2000)
    .subscribe(a=>console.log(a));