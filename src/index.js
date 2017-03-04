require('whatwg-fetch');
require('./scss/bootstrap.scss');
import injectTapEventPlugin from 'react-tap-event-plugin';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/App.jsx';
import thunk from 'redux-thunk';
import searchReducer from './reducers/search';


// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


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
