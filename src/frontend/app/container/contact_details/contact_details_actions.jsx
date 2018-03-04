import ContactsApi from "../../utils/contacts/contacts_service";
import {
    LOAD_CONTACTS_ACTION, LOAD_CONTACTS_FAILED_ACTION,
    LOAD_CONTACTS_SUCCESS_ACTION
} from "../../state/actions/contact_list.actions";


export function getAllContacts(dispatch) {
    dispatch(loadContacts());
    ContactsApi.getContactsList()
        .then(data => {
            let contactList = data.contactList;
            dispatch(loadContactsSuccess(contactList))
        })
        .catch(err => {
            dispatch(loadContactFailed(err));
        });
}

export function loadContacts() {
    return {type: LOAD_CONTACTS_ACTION, payload: null};
}

export function loadContactsSuccess(contacts) {
    return {type: LOAD_CONTACTS_SUCCESS_ACTION, payload: contacts};
}

export function loadContactFailed(err) {
    return {type: LOAD_CONTACTS_FAILED_ACTION, payload: err};
}