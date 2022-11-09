import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// this will have our reducer fuctions as key/value pairs
const reducer = combineReducers({})

// We are passing an empty initial state
const initialState = {}

// We are creating an array of middleware so we can use multiple instead of just passing one inside the applyMiddleware function
// Redux Thunk is middleware that allows you to return functions, rather than just actions, within Redux.
const middlewares = [thunk]

// createStore is the newer version of createStore from redux
// spreading the middlewares will allow us to use all of them
const store = createStore(reducer, initialState, 
    composeWithDevTools(applyMiddleware(...middlewares)))

export default store

