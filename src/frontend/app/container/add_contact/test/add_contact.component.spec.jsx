import React from 'react';
import {shallow} from 'enzyme';
import AddContact from "../add_contact.component";

describe('<AddContact />', () => {

    xit('should simulate text change in name input box', () => {
        const wrapper = shallow(<AddContact/>);
        const nameInput = wrapper.find('[name="name"]');
        nameInput.simulate('focus');
        nameInput.simulate('change', {target: {value: 'test'}});

        expect(nameInput.get(0).value).to.equal('test');
    });
});