import React from 'react';
import {deleteContact, editContact, getAllContacts, searchContacts} from "./contact-details-actions";
import {Loader} from "../core/components/loader/loader";
import {DefaultContacts} from "./default-contacts/default-contacts.component";
import {NewContacts} from "./new-contacts/new-contacts.component";
import {getContactsByIds} from "../utils/contacts/contacts-helper";
import {Search} from "../core/components/search/search.component";
import {connect} from "react-redux";

class ContactDetails extends React.Component {

    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getAllContacts);
    }

    handleEdit(contact) {
        this.props.handleEdit(contact);
        this.props.history.push('/');
    }

    render() {
        const isLoading = this.props.defaultContactList.isLoading;

        if (isLoading) {
            return <Loader/>;
        } else if (!isLoading) {
            const query = this.props.searchContacts.query;
            const defaultContactIds = this.props.defaultContactList.filteredDataIds || [];
            let defaultContactList = this.props.defaultContactList.data;

            const newContactIds = this.props.newContactList.filteredDataIds || [];
            let newContactList = this.props.newContactList.data;

            if (!!query.length) {
                defaultContactList = getContactsByIds(defaultContactList, defaultContactIds);
                newContactList = getContactsByIds(newContactList, newContactIds);
            }

            return (
                <div>
                    <Search query={query} handleChange={this.props.handleChange}/>
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