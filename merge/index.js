import Rx from 'rxjs';

const bluePostFeed = Rx.Observable
    .interval(1000)
    .map(n=>`Blue Post Article #${n}`);

const redHeraldFeed = Rx.Observable
    .interval(650)
    .map(n=>`Red Herald Article #${n}`);

const greenTribuneFeed = Rx.Observable
    .interval(1650)
    .map(n=>`Green Tribune Article #${n}`);

const config = {
    blue:bluePostFeed,
    red:redHeraldFeed,
    green:greenTribuneFeed
};

const colors = ['blue','red','green'];

Rx.Observable.from(colors)
    .mergeMap(color=>config[color])
    .subscribe(a=>console.log(a));

// bluePostFeed
//     .merge(
//         redHeraldFeed
//     )
//     .subscribe(a=>console.log(a));

// Rx.Observable.of(
//     bluePostFeed,
//     redHeraldFeed,
//     greenTribuneFeed
// ).mergeAll()
// .subscribe(a=>console.log(a));