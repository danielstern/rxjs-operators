import Rx from 'rxjs';

const range = Rx.Observable.range(1,9);

range
    .map(n=>n * n)
    .subscribe(a=>console.log(a));

const notificationAPI = Rx.Observable.interval(1000);
notificationAPI
    .mapTo({type:"NOTIFICATION_ARRIVED"})
    .subscribe(a=>console.log(a));