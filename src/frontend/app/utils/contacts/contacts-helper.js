import {FORM_ERROR_MESSAGES} from "../../constants/constants";

export function validateAddContactField(key, value, errors) {
    let isFormValid = true;
    let hasError = false;

    if (!value && !value.length) {
        errors[key] = FORM_ERROR_MESSAGES[key].required;
    } else {
        switch (key) {
            case 'name':
                errors.name = '';
                break;
            case 'email':
                errors.email = (!value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) ? FORM_ERROR_MESSAGES[key].invalid : '';
                break;
            case 'phone':
                errors.phone = isNaN(value) || (value.length !== 10) ? FORM_ERROR_MESSAGES[key].invalid : '';
                break;
            case 'department':
                errors.department = '';
                break;

        }
    }

    Object.keys(errors).every(field => {
        if (errors[field] && !!errors[field].length) {
            isFormValid = false;
            hasError = true;
        }

        return isFormValid;
    });

    return {errors, isFormValid, hasError};
}

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