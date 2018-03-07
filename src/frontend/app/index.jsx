import React from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-theme.css'
import App from './app.component'
import {Route, BrowserRouter, Redirect, Switch} from "react-router-dom";
import {Home} from "./container/home/home.component";
import {About} from "./container/about/about";
import {Provider} from 'react-redux';
import configureStore from "./store/configure_store";
import ContactDetailsContainer from "./container/contact_details/contact_details_container";

export const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact={true} path='/' component={Home}/>
                    <Route path='/contactDetails' component={ContactDetailsContainer}/>
                    <Route path='/about' component={About}/>
                    <Redirect from='*' to='/'/>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('app')
);