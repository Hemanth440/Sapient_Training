import {combineReducers} from 'redux';
import defaultContactList from './default-contact-list.reducer';
import newContactList from './new-contact-list.reducer';
import searchContacts from './search-contacts.reducer';
import editContact from './edit-contact.reducer';

const reducers = {defaultContactList, newContactList, searchContacts, editContact};

const rootReducer = combineReducers({...reducers});

export default rootReducer;