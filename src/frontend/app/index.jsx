import React from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-theme.css'
import App from './app.component'
import {Route, BrowserRouter, Redirect, Switch} from "react-router-dom";
import {Home} from "./home/home.component";
import {About} from "./about/about";
import {Provider} from 'react-redux';
import configureStore from "./store/configure-store";
import ContactDetailsContainer from "./contact-details/contact-details";

const store = configureStore();

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