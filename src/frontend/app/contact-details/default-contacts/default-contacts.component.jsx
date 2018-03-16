import React from 'react';
import {ContactDetailsItem} from "../contact-detail-item/contact-detail-item";
import {ContactsWrapper} from "../contacts-wrapper";
import {Error} from "../../core/components/error/error.component";
import {NoData} from "../../core/components/no_data/no-data.component";

export const DefaultContacts = ({defaultContactList}) => {
    const rows = defaultContactList.map(
        (defaultContact, index) => <ContactDetailsItem key={index} contact={defaultContact}/>);

    return (
        <div>
            <h1>Default Contact List</h1>
            {
                rows ? !!rows.length ? <ContactsWrapper rows={rows}/> : <NoData/> : <Error/>
            }
        </div>
    )
};