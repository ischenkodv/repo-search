require('whatwg-fetch');
require('./scss/bootstrap.scss');
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/App.jsx';
import thunk from 'redux-thunk';

import searchReducer from './reducers/search';

const reducer = combineReducers({
    search: searchReducer,
});


// Sync dispatched route actions to the history
const store = createStore(reducer, applyMiddleware(thunk));


const root = document.createElement('div');
document.body.append(root);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    root
);
