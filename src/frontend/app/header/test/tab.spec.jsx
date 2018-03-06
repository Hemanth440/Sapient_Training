import React from 'react';
import {shallow} from "enzyme";
import {Tab} from "../tabs/tab/tab.component";

describe('<Tab/>', () => {
    it('should contain NavLink', () => {
        const tab = {
            isRootUrl: false,
            url: '/'
        };
        const wrapper = shallow(<Tab tab={tab}/>);
        expect(wrapper.find('NavLink')).toMatchSnapshot();
    });
});
