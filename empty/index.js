import Rx from 'rxjs';

Rx.Observable
    .empty()
    .subscribe({
        complete:a=>console.log("COMPLEEEEEAAAT",a),
        next:a=>console.log("EMITTT",a)
    });