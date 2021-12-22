import {createStore} from 'redux'
import rootReducer from './rootReducer'
const store=createStore(rootReducer)

console.log('current state',store.getState())
export default store