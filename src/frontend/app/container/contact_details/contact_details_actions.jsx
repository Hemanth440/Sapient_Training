import ContactsApi from "../../utils/contacts_service";
import {LOAD_CONTACTS_FAILED_ACTION, LOAD_CONTACTS_SUCCESS_ACTION} from "../../state/actions/contact_list.actions";


function getAllContacts(dispatch) {
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
    return getAllContacts;
}

export function loadContactsSuccess(contacts) {
    return {type: LOAD_CONTACTS_SUCCESS_ACTION, payload: contacts};
}

export function loadContactFailed(err) {
    return {type: LOAD_CONTACTS_FAILED_ACTION, payload: err};
}