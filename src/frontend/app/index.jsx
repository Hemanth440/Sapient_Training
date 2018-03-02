import React from 'react';
import ReactDOM from 'react-dom';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap-theme.css'
import App from './app.component'
import {Route, BrowserRouter} from "react-router-dom";
import {Home} from "./container/home/home.component";
import {About} from "./container/about/about";
import ContactDetails from "./container/contact_details/contact_details";


ReactDOM.render(
    <BrowserRouter>
        <App>
            <Route exact={true} path='/' component={Home}/>
            <Route path='/contactDetails' component={ContactDetails}/>
            <Route path='/about' component={About}/>
        </App>
    </BrowserRouter>
    , document.getElementById('app')
);