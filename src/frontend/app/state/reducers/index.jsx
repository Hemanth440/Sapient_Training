import {combineReducers} from 'redux';
import defaultContactList from './default_contact_list.reducer';
import newContactList from './new_contact_list.reducer';

const rootReducer = combineReducers({defaultContactList, newContactList});

export default rootReducer;