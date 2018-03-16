import {
    LOAD_CONTACTS_SUCCESS_ACTION, LOAD_CONTACTS_ACTION,
    LOAD_CONTACTS_FAILED_ACTION, SEARCH_CONTACTS_ACTION
} from "../actions/contact-list.actions";
import {getContactsIdsByQuery} from "../../utils/contacts/contacts-helper";

const initialState = {
    isLoading: false,
    data: [],
    filteredDataIds: []
};

export default function defaultContactList(state = initialState, action) {
    switch (action.type) {
        case LOAD_CONTACTS_ACTION:
            return {
                ...state,
                isLoading: true
            };
        case LOAD_CONTACTS_SUCCESS_ACTION:
            return {
                ...state,
                isLoading: false,
                data: action.payload || []
            };
        case LOAD_CONTACTS_FAILED_ACTION:
            return {
                ...state,
                isLoading: false,
                data: null
            };
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