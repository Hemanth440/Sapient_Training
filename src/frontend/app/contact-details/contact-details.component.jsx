import React from 'react';
import {deleteContact, editContact, getAllContacts, searchContacts, loadContacts} from "./contact-details-actions";
import {Loader} from "../core/components/loader/loader";
import {DefaultContacts} from "./default-contacts/default-contacts.component";
import {NewContacts} from "./new-contacts/new-contacts.component";
import {getContactsByIds} from "../utils/contacts/contacts-helper";
import {Search} from "../core/components/search/search.component";
import {connect} from "react-redux";
import { DefaultContactsListSelector, NewContactsListSelector } from './../selectors/contact-details.selector';

class ContactDetails extends React.Component {

    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(loadContacts());
    }

    handleEdit(contact) {
        this.props.handleEdit(contact);
        this.props.history.push('/');
    }

    render() {
        const {
            isDefaultContactsLoading, 
            defaultContactList, 
            newContactList, 
            searchQuery
        }   = this.props;

        if (isDefaultContactsLoading) {
            return <Loader/>;
        } else if (!isDefaultContactsLoading) {
            return (
                <div>
                    <Search query={searchQuery} handleChange={this.props.handleChange}/>
                    <DefaultContacts defaultContactList={defaultContactList}/>
                    <NewContacts newContactList={newContactList} handleEdit={this.handleEdit}
                                 handleDelete={this.props.handleDelete}/>
                </div>
            )
        }

        return null;
    }
}

function mapStateToProps(state) {
    return {
        isDefaultContactsLoading: state.defaultContactList.isLoading,
        defaultContactList: DefaultContactsListSelector(state),
        newContactList: NewContactsListSelector(state),
        searchQuery: state.searchContacts.query
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