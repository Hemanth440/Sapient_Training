import {
    ADD_NEW_CONTACT_ACTION, SEARCH_CONTACTS_ACTION, UPDATE_CONTACT_ACTION
} from "../actions/contact_list.actions";
import {getContactsIdsByQuery} from "../../utils/contacts/contacts_helper";

const initialState = {
    data: [],
    filteredData: []
};

export default function newContactList(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_CONTACT_ACTION:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        case UPDATE_CONTACT_ACTION:
            const updatedContact = action.payload;
            const oldContactIndex = state.data.findIndex(contact => contact.id === updatedContact.id);
            state.data[oldContactIndex] = updatedContact;
            return state;
        case SEARCH_CONTACTS_ACTION:
            const filteredDataIds = getContactsIdsByQuery(state.data, action.payload);
            return {
                ...state,
                filteredDataIds
            };
        default:
            return state;
    }
}