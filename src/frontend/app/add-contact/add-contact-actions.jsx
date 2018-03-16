import React from 'react';
import {
    ADD_NEW_CONTACT_ACTION, ADD_NEW_CONTACT_USER_INPUT_ACTION, RESET_EDIT_CONTACT_ACTION, UPDATE_CONTACT_ACTION
} from "../store/actions/contact-list.actions";

export function addContact(contact) {
    return function (dispatch, getState) {
        let type;
        if (!contact.id) {
            const defaultContactList = getState().defaultContactList.data;
            const newContactList = getState().newContactList.data;
            const defaultContactListLength = defaultContactList ? defaultContactList.length : 0;
            contact.id = defaultContactListLength + newContactList.length + 1;
            type = ADD_NEW_CONTACT_ACTION;
        } else {
            type = UPDATE_CONTACT_ACTION
        }

        dispatch({type, payload: contact});
    };
}

export function handleUserInput(payload) {
    return {type: ADD_NEW_CONTACT_USER_INPUT_ACTION, payload}
}

export function resetForm() {
    return {type: RESET_EDIT_CONTACT_ACTION, payload: null}
}