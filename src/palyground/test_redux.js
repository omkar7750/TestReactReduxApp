import {createStore} from 'redux';


//Reducers
const countReducer = (state = {"count":0}, action) => {
    console.log('store called.')
    if(action.type === 'INCREMENT'){
        return {count: state.count + action.incrementBy}
    }
    else if(action.type === 'DECREMENT'){
        return {count: state.count - action.decrementBy}
    }
    else if(action.type === 'RESET'){
        return {count: 0}
    }
    else if(action.type === 'SET'){
        return {count: state.count +action.count}
    }
    return state;
    
}

//store
const store = createStore(countReducer)

console.log(store.getState())

//Action generaters
const incrementCount = ({incrementBy = 1} = {}) => ({type: 'INCREMENT', incrementBy}),
decrementCount = ({decrementBy = 1} = {}) => ({type: 'DECREMENT', decrementBy}),
setCount = ({count = 1} = {}) => ({type: 'SET', count}),
resetCount = () => ({type: 'RESET'})

//subscribe
let unsubscribe = store.subscribe(() => {
    console.log('in subscribe function: ', store.getState());
})

//dispatchers
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(decrementCount({decrementBy: 2}))
store.dispatch(resetCount())
store.dispatch(setCount({count: 115}))

//unsubscribe
unsubscribe();
