import React from 'react';
import {connect} from 'react-redux';
import ContactDetails from './contact_details';

function mapStateToProps(state) {
    return {
        defaultContactList: state.defaultContactList,
        newContactList: state.newContactList
    }
}

const ContactDetailsContainer = connect(mapStateToProps)(ContactDetails);

export default ContactDetailsContainer;