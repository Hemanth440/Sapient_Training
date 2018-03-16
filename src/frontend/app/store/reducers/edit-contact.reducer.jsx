import {EDIT_CONTACT_ACTION, RESET_EDIT_CONTACT_ACTION} from "../actions/contact-list.actions";

const initialState = {};

export default function editContact(state = initialState, action) {
    switch (action.type) {
        case EDIT_CONTACT_ACTION:
            return {
                ...state,
                ...action.payload
            };
        case RESET_EDIT_CONTACT_ACTION:
            return initialState;
        default:
            return state;
    }
}