import Rx from 'rxjs'

const friendsAPI = Rx.Observable
    .interval(1000)
    .map(i=>({name:`Friend #${i}`, mutualFriends: i * 2 + 1}))
    .pluck("mutualFriends")
    .subscribe(a=>console.log(a));