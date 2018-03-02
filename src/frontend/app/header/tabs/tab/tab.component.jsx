import React from 'react';
import {NavLink} from "react-router-dom";

export const Tab = ({tab}) =>
    <li className="tabs-list__item">
        <NavLink to={tab.url} exact={tab.isRootUrl} activeClassName="active">
            {tab.name}
        </NavLink>
    </li>
