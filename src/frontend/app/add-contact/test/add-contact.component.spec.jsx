import React from 'react';
import {mount} from 'enzyme';
import AddContact from "../add-contact.component";

const props = {
    editContact: {}
};

describe('<AddContact />', () => {

    it('should simulate text change in name input box', () => {
        const wrapper = ReactTestUtils.renderIntoDocument(<AddContact {...props}/>);
        const nameInput = wrapper.find('[name="name"]');
        nameInput.simulate('focus');
        nameInput.simulate('change', {target: {value: 'test'}});

        debugger;
        expect(nameInput.get(0).props.value).toEqual('test');
    });
});