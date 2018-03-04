import {SEARCH_CONTACTS_ACTION} from "../actions/contact_list.actions";

const initialState = {
    query: ''
};

export default function searchContacts(state = initialState, action) {
    switch (action.type) {
        case SEARCH_CONTACTS_ACTION:
            const query = action.payload;
            return {
                ...state,
                query
            };
        default:
            return state;
    }
}