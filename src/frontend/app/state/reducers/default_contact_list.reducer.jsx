import {
    LOAD_CONTACTS_SUCCESS_ACTION, LOAD_CONTACTS_ACTION,
    LOAD_CONTACTS_FAILED_ACTION
} from "../actions/contact_list.actions";

const initialState = {
    isLoading: false,
    data: []
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
        default:
            return state;
    }
}