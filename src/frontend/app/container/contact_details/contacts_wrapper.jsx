import React from 'react';

export const ContactsWrapper = ({rows}) =>
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