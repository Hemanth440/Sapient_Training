import {combineReducers} from 'redux';
import defaultContactList from './default_contact_list.reducer';
import newContactList from './new_contact_list.reducer';
import searchContacts from './search_contacts.reducer';
import editContact from './edit_contact.reducer';

const rootReducer = combineReducers({defaultContactList, newContactList, searchContacts, editContact});

export default rootReducer;