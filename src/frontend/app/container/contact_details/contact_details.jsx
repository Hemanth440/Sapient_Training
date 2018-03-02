import React from 'react';
import {ContactDetailsItem} from "./contact_detail_item/contact_detail_item";
import {store} from "../../index";
import {loadContacts} from "./contact_details_actions";

export default class ContactDetails extends React.Component {

    componentDidMount() {
        store.dispatch(loadContacts());
    }

    render() {
        const isLoading = this.props.defaultContactList.isLoading;
        const contactList = [...this.props.defaultContactList.data, ...this.props.newContactList.data];

        if (isLoading) {
            return null;
        }
        else if (!isLoading && !contactList) {
            return <div>Unable to load the contacts</div>;
        }

        const rows = contactList.map(
            (contact, index) => <ContactDetailsItem key={index} contact={contact}/>);
        return (
            <div>
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email Id</th>
                        <th>Phone</th>
                    </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </div>
        )
    }
}