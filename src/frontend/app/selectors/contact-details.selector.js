import { createSelector } from "reselect";
import { getContactsByIds } from "../utils/contacts/contacts-helper";

const defaultContactsSelector = state => state.defaultContactList.data;
const filteredDefaultContactsSelector = state => state.defaultContactList.filteredDataIds;
const newContactsSelector = state => state.newContactList.data;
const filteredNewContactsSelector = state => state.newContactList.filteredDataIds;
const searchQuerySelector = state => state.searchContacts.query;

export const DefaultContactsListSelector = createSelector(
    defaultContactsSelector,
    filteredDefaultContactsSelector,
    searchQuerySelector,
    getContactsByIds
);

export const NewContactsListSelector = createSelector(
    newContactsSelector,
    filteredNewContactsSelector,
    searchQuerySelector,
    getContactsByIds
)
