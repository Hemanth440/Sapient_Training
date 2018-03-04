import React from 'react';
import {ADD_NEW_CONTACT_ACTION} from "../../state/actions/contact_list.actions";

export function addContact(contact) {
    return function (dispatch, getState) {
        const defaultContactList = getState().defaultContactList.data;
        const newContactList = getState().newContactList.data;
        const defaultContactListLength = defaultContactList ? defaultContactList.length : 0;
        contact.id = defaultContactListLength + newContactList.length + 1;
        dispatch({type: ADD_NEW_CONTACT_ACTION, payload: contact});
    };
}