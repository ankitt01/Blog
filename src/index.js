import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);

//"General data laoding with redux"
// Component gets rendered ont o the screen 
// Component's componentDidMpunt lifecycle method gets called fir time when the app loads
// we call an action creator from componentDidMount
// Action creator runs code to make an API request 
// API respnds with data 
// Action creator returns an action with fetched data on the payload property 
// Some reducer sees the action returns the data off the payload 
// Because we generated new state object redux.react-redux cause our React app to be rerendered