import ContactsApi from './../utils/contacts/contacts.service';
import { loadContactsSuccess, loadContactFailed } from './../contact-details/contact-details-actions';
import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_CONTACTS_ACTION } from './../store/actions/contact-list.actions';

export function* getAllContacts() {
    try {
        const contacts = yield call(ContactsApi.getContactsList)
        yield put(loadContactsSuccess(contacts.contactList));
    } catch(error) {
        yield put(loadContactFailed(error));
    }
}

export function* watchGetContacts() {
    yield takeEvery(LOAD_CONTACTS_ACTION, getAllContacts);
}