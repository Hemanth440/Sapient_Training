import React from 'react';
import {ContactDetailsItem} from "../contact_detail_item/contact_detail_item";
import {ContactsWrapper} from "../contacts_wrapper";
import {Error} from "../../../shared/components/error/error.component";
import {NoData} from "../../../shared/components/no_data/no_data.component";

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