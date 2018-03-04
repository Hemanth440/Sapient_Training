import {BASE_URL} from "../../constants/constants";

class ContactsApi {
    static getContactsList() {
        const url = `${BASE_URL}/app/mock/contact_list.json`;
        return fetch(url)
            .then(response => response.json())
            .catch(err => console.log(err));
    }
}

export default ContactsApi;