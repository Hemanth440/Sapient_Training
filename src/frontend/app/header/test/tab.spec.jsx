import React from 'react';
import {shallow} from "enzyme";
import {Tab} from "../tabs/tab/tab.component";

describe('<Tab/>', () => {
    it('should contain NavLink', () => {
        const tab = {
            isRootUrl: true,
            url: '/',
            name: 'Home'
        };
        const wrapper = shallow(<Tab tab={tab}/>);
        expect(wrapper.find('NavLink')).toMatchSnapshot();
    });

    it('should have "/" for property "to" in NavLink', () => {
        const tab = {
            isRootUrl: true,
            url: '/',
            name: 'Home'
        };
        const wrapper = shallow(<Tab tab={tab}/>);
        const navLink = wrapper.find('NavLink');
        expect(navLink.prop('to')).toBe('/')
    });
});
