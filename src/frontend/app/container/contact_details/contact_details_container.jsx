import React from 'react';
import {connect} from 'react-redux';
import ContactDetails from './contact_details';
import {SEARCH_CONTACTS_ACTION} from "../../state/actions/contact_list.actions";

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
            dispatch({
                type: SEARCH_CONTACTS_ACTION,
                payload: e.target.value
            })
        }
    }
}

const ContactDetailsContainer = connect(mapStateToProps, mapEventsToProps)(ContactDetails);

export default ContactDetailsContainer;