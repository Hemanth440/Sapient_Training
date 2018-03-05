import React from 'react';
import {ContactDetailsItem} from "../contact_detail_item/contact_detail_item";
import {ContactsWrapper} from "../contacts_wrapper";
import {Error} from "../../../shared/components/error/error.component";
import {NoData} from "../../../shared/components/no_data/no_data.component";

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