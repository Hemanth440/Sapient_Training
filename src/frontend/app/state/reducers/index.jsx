import {combineReducers} from 'redux';
import defaultContactList from './default_contact_list.reducer';
import newContactList from './new_contact_list.reducer';
import searchContacts from './search_contacts.reducer';

const rootReducer = combineReducers({defaultContactList, newContactList, searchContacts});

export default rootReducer;