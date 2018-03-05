import React from 'react';
import './contact_detail_item.css';

export const ContactDetailsItem = ({contact, handleEdit, handleDelete}) =>
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
        {
            handleDelete ?
                <td>
                    <span className="glyphicon glyphicon-remove contact_detail_item__delete"
                          onClick={() => handleDelete(contact)}></span>
                </td> :
                null
        }
    </tr>;