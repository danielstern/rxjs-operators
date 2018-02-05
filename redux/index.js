import Rx from 'rxjs';

const createStore = (reducer, preloadedState)=>{
    const eventSource = new Rx.BehaviorSubject(preloadedState);

    const scanned = eventSource
        .scan(reducer)
        .distinctUntilChanged();

    return {
        dispatch(action) {
            eventSource.next(action);
        },
        subscribe(listener) {
            scanned.subscribe(listener);
        }
    }
};

const defaultState = {
    todos: ["Write some code!","Play video games!"]
};

const reducer = (state = defaultState, action)=>{
    switch (action.type) {
        case "ADD_TODO":
            let newState = Object.assign({},state);
            newState.todos = [...state.todos,action.todo]
            return newState;
    }
    return state;
};

const store = createStore(reducer,defaultState);
store.subscribe(a=>console.log(a));
store.dispatch({type:"ADD_TODO",todo:"LEARN RXJS"});
store.dispatch({type:"REMOVE_TODO",todo:"LEARN RXJS"});
store.dispatch({type:"ADD_TODO",todo:"UN-LEARN RXJS"});