import React from 'react';
import './header.css';
import {Tabs} from "./tabs/tabs.component";
import {TABS_LIST} from '../constants/constants';

export const Header = () =>
    <header>
        <h1>ReactJS GS Training Project</h1>
        <Tabs tabsList={TABS_LIST}/>
    </header>