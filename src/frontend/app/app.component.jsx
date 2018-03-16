import React from 'react';
import {Header} from "./header/header.component";
import Container from "./container";

export default class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Container view={this.props.children}/>
            </div>
        )
    }
}