import React from 'react';
import './tabs.css'
import {Tab} from "./tab/tab.component";

export const Tabs = ({tabsList}) =>
    <ul className="tabs-list">
        {
            tabsList.map((tab, index) => <Tab tab={tab} key={index}/>)
        }
    </ul>
