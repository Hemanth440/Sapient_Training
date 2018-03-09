import * as contacts from '../../mock/contact_list.json';
import {getContactsByIds, getContactsIdsByQuery} from "../contacts/contacts_helper";

const contactList = contacts.contactList;
const contactListIds = contactList.map(contact => contact.id);

describe('getContactsByIds', () => {

    it('should return empty array when contacts are passed as null/undefined', () => {
        expect(getContactsByIds(undefined, [1, 2])).toEqual([]);
        expect(getContactsByIds(null, [1, 2])).toEqual([]);
    });

    it('should return all contacts when ids are passed as null/undefined', () => {
        expect(getContactsByIds(contactList, undefined)).toEqual(contactList);
        expect(getContactsByIds(contactList, null)).toEqual(contactList);
    });


    it('should return passed contacts when contacts and ids are passed as null/undefined', () => {
        expect(getContactsByIds(undefined, undefined)).toEqual([]);
        expect(getContactsByIds(null, null)).toEqual(null);
    });

    it('should return empty array when no params are passed', () => {
        expect(getContactsByIds()).toEqual([])
    });

    it('should return contacts of specified ids', () => {
        const filteredContacts = getContactsByIds(contactList, [1, 2]);
        const expectedFilteredContacts = [...contactList.slice(0, 2)];
        expect(filteredContacts).toEqual(expectedFilteredContacts)
    });
});

describe('getContactsIdsByQuery', () => {
    it('should return all contacts when query is empty/null/undefined', () => {
        expect(getContactsIdsByQuery(contactList, '')).toEqual(contactListIds);
        expect(getContactsIdsByQuery(contactList, null)).toEqual(contactListIds);
        expect(getContactsIdsByQuery(contactList, undefined)).toEqual(contactListIds);
    });

    it('should return empty array when contacts are null/undefined', () => {
        expect(getContactsIdsByQuery(null, 'dan')).toEqual([]);
        expect(getContactsIdsByQuery(undefined, null)).toEqual([]);
    });


    it('should return empty array when both contacts and query are empty/null/undefined', () => {
        expect(getContactsIdsByQuery(null, null)).toEqual([]);
        expect(getContactsIdsByQuery(undefined, undefined)).toEqual([]);
    });

    it('should return contact Ids that has name word "Brendan" in name', () => {
        expect(getContactsIdsByQuery(contactList, 'Brendan')).toEqual([contactList[0].id]);
    });

    it('should return contact Ids that has name word "dan" in name', () => {
        expect(getContactsIdsByQuery(contactList, 'dan')).toEqual([contactList[0].id, contactList[1].id]);
    });
});