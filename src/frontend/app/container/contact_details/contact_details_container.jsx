import React from 'react';
import {connect} from 'react-redux';
import ContactDetails from './contact_details';
import {deleteContact, editContact, searchContacts} from "./contact_details_actions";

function mapStateToProps(state) {
    return {
        defaultContactList: state.defaultContactList,
        newContactList: state.newContactList,
        searchContacts: state.searchContacts
    }
}

function mapEventsToProps(dispatch) {
    return {
        handleChange(e) {
            dispatch(searchContacts(e.target.value));
        },

        handleEdit(contact) {
            dispatch(editContact(contact));
        },

        handleDelete(contact) {
            dispatch(deleteContact(contact));
        },
        dispatch
    }
}

const ContactDetailsContainer = connect(mapStateToProps, mapEventsToProps)(ContactDetails);

export default ContactDetailsContainer;