import {
    DELETE_CONTACT_ACTION,
    EDIT_CONTACT_ACTION,
    LOAD_CONTACTS_ACTION, LOAD_CONTACTS_FAILED_ACTION,
    LOAD_CONTACTS_SUCCESS_ACTION, SEARCH_CONTACTS_ACTION
} from "../store/actions/contact-list.actions";

export function loadContacts() {
    return {type: LOAD_CONTACTS_ACTION, payload: null};
}

export function loadContactsSuccess(contacts) {
    return {type: LOAD_CONTACTS_SUCCESS_ACTION, payload: contacts};
}

export function loadContactFailed(err) {
    return {type: LOAD_CONTACTS_FAILED_ACTION, payload: err};
}

export function searchContacts(payload) {
    return {type: SEARCH_CONTACTS_ACTION, payload}
}

export function editContact(payload) {
    return {type: EDIT_CONTACT_ACTION, payload}
}

export function deleteContact(contact) {
    return {type: DELETE_CONTACT_ACTION, payload: contact}
}