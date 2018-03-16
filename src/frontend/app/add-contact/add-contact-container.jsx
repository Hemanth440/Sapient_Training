import React from 'react';
import {connect} from 'react-redux';
import AddContact from "./add-contact.component";
import {handleUserInput, resetForm} from "./add-contact-actions";

function mapStateToProps(state) {
    return {
        editContact: state.editContact
    }
}

function mapEventsToProps(dispatch) {
    return {
        handleUserInput(input) {
            dispatch(handleUserInput(input));
        },

        resetForm() {
            dispatch(resetForm());
        },

        dispatch
    };
}

const AddContactContainer = connect(mapStateToProps, mapEventsToProps)(AddContact);

export default AddContactContainer;