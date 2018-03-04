import React from 'react';

export const SearchContacts = ({query, handleChange}) =>
    <input className="form-control" type="text" placeholder="Search" value={query} onChange={(e) => handleChange(e)}
           aria-label="Search"/>