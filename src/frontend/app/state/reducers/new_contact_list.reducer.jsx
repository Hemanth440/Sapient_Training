import {
    ADD_NEW_CONTACT_ACTION
} from "../actions/contact_list.actions";

const initialState = {
    data: []
};

export default function newContactList(state = initialState, action) {
    switch (action.type) {
        case ADD_NEW_CONTACT_ACTION:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
}