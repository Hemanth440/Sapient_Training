export function getContactsByIds(contacts = [], ids) {
    if (!ids) {
        return contacts;
    }
    return !!contacts ? contacts.filter(contact => ids.indexOf(contact.id) !== -1) : [];
}

export function getContactsIdsByQuery(contacts = [], query = '') {
    const regex = new RegExp(query || '', 'gi');
    const filteredDataIds = [];
    !!contacts ?
        contacts.forEach((contact => {
            if (regex.test(contact.name) || regex.test(contact.email) || regex.test(contact.phone) || regex.test(contact.department)) {
                filteredDataIds.push(contact.id);
            }
        })) : [];

    return filteredDataIds;
}