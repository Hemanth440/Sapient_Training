import React from 'react';
import {ADD_NEW_CONTACT_ACTION} from "../../state/actions/contact_list.actions";

export function addContact(contact) {
    return function (dispatch) {
        dispatch({type: ADD_NEW_CONTACT_ACTION, payload: contact});
    };
}