import Rx from 'rxjs'

const customObservable = Rx.Observable.create(observer=>{
    observer.next(42);
    //observer.complete(108);
    setInterval(()=>{
        observer.next("FLOON!!");
    },500);

    setTimeout(()=>{
        observer.complete();
    },2500)
});

customObservable
    .subscribe({
        next:a=>console.log("NEXT!",a),
        complete:b=>console.log("COMPLETE",b)
    });