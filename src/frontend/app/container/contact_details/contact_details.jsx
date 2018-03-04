import React from 'react';
import {store} from "../../index";
import {getAllContacts} from "./contact_details_actions";
import {Loader} from "../../shared/components/loader/loader";
import {DefaultContacts} from "./default_contacts/default_contacts.component";
import {NewContacts} from "./new_contacts/new_contacts.component";
import {SearchContacts} from "../../shared/components/search_contacts/search_contacts.component";
import {getContactsByIds} from "../../utils/contacts/contacts_helper";

export default class ContactDetails extends React.Component {

    componentDidMount() {
        store.dispatch(getAllContacts);
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
                    <SearchContacts query={query} handleChange={this.props.handleChange}/>
                    <DefaultContacts defaultContactList={defaultContactList}/>
                    <NewContacts newContactList={newContactList}/>
                </div>
            )
        }

        return null;
    }
}