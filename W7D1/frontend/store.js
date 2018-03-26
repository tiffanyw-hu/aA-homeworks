import {createStore} from 'redux';
import reducer from './reducer.js';

let store = createStore(reducer);

window.store = store;

export default store;
