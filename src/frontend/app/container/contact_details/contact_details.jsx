import React from 'react';
import {store} from "../../index";
import {getAllContacts} from "./contact_details_actions";
import {Loader} from "../../shared/components/loader/loader";
import {DefaultContacts} from "./default_contacts/default_contacts.component";
import {NewContacts} from "./new_contacts/new_contacts.component";
import {getContactsByIds} from "../../utils/contacts/contacts_helper";
import {Search} from "../../shared/components/search/search.component";

export default class ContactDetails extends React.Component {

    constructor(props) {
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentDidMount() {
        store.dispatch(getAllContacts);
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
                    <NewContacts newContactList={newContactList} handleEdit={this.handleEdit}/>
                </div>
            )
        }

        return null;
    }
}