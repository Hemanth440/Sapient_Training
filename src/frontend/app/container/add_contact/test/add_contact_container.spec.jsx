import React from 'react';
import configureMockStore from 'redux-mock-store';
import AddContactContainer from "../add_contact_container";
import {
    ADD_NEW_CONTACT_USER_INPUT_ACTION,
    RESET_EDIT_CONTACT_ACTION
} from "../../../store/actions/contact_list.actions";
import {Provider} from "react-redux";

const store = configureMockStore()({});

xdescribe('<AddContactContainer />', () => {
    let instance, container;

    beforeEach(() => {
        spyOn(store, 'dispatch');
        instance = ReactTestUtils.renderIntoDocument(
            <Provider store={store}>
                <AddContactContainer/>
            </Provider>
        );
        container = ReactTestUtils.findRenderedComponentWithType(instance, AddContactContainer);
    });

    it('sets the handleUserInput prop on the AddContact Component', () => {
        container.renderedElement.props.handleUserInput('test');
        expect(store.dispatch).toHaveBeenCalledWith(
            {type: ADD_NEW_CONTACT_USER_INPUT_ACTION, payload: 'test'}
        )
    });

    it('sets the resetForm prop on the AddContact Component', () => {
        container.renderedElement.props.resetForm();
        expect(store.dispatch).toHaveBeenCalledWith(
            {type: RESET_EDIT_CONTACT_ACTION, payload: null}
        )
    });

});