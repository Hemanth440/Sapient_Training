import React from 'react';
import {connect} from 'react-redux';
import AddContact from "./add_contact.component";
import {handleUserInput, resetForm} from "./add_contact_actions";

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
        }
    };
}

const AddContactContainer = connect(mapStateToProps, mapEventsToProps)(AddContact);

export default AddContactContainer;