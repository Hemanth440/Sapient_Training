import React from 'react';

export const ContactDetailsItem = ({contact}) =>
    <tr>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
    </tr>