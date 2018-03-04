import React from 'react';
import {store} from "../../index";
import {getAllContacts} from "./contact_details_actions";
import {Loader} from "../../shared/components/loader/loader";
import {DefaultContacts} from "./default_contacts/default_contacts.component";
import {NewContacts} from "./new_contacts/new_contacts.component";

export default class ContactDetails extends React.Component {

    componentDidMount() {
        store.dispatch(getAllContacts);
    }

    render() {
        const isLoading = this.props.defaultContactList.isLoading;

        if (isLoading) {
            return <Loader/>;
        } else if (!isLoading) {
            return (
                <div>
                    <DefaultContacts defaultContactList={this.props.defaultContactList.data}/>
                    <NewContacts newContactList={this.props.newContactList.data}/>
                </div>
            )
        }

        return null;
    }
}