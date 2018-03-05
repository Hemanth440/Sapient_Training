import React from 'react';
import './contact_detail_item.css';

export const ContactDetailsItem = ({contact, handleEdit}) =>
    <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        {
            handleEdit ?
                <td>
                    <span className="glyphicon glyphicon-pencil contact_detail_item__edit"
                          onClick={() => handleEdit(contact)}></span>
                </td> :
                null
        }
    </tr>