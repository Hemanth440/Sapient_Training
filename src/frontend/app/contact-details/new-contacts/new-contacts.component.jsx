import React from 'react';
import {ContactDetailsItem} from "../contact-detail-item/contact-detail-item";
import {ContactsWrapper} from "../contacts-wrapper";
import {Error} from "../../core/components/error/error.component";
import {NoData} from "../../core/components/no_data/no-data.component";

export const NewContacts = ({newContactList, handleEdit, handleDelete}) => {
    const rows = newContactList.map(
        (newContact, index) => <ContactDetailsItem handleDelete={handleDelete} handleEdit={handleEdit} key={index}
                                                   contact={newContact}/>);

    return (
        <div>
            <h1>New Contact List</h1>
            {
                rows ? !!rows.length ? <ContactsWrapper rows={rows}/> : <NoData/> : <Error/>
            }
        </div>
    )
};