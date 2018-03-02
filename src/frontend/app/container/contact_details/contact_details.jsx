import React from 'react';
import {ContactDetailsItem} from "./contact_detail_item/contact_detail_item";
import {BASE_URL} from "../../constants/constants";
import {getContactsList} from "../../utils/contacts_service";


export default class ContactDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contactList: []
        }
    }

    componentDidMount() {
        const url = `${BASE_URL}/app/mock/contact_list.json`;
        getContactsList(url)
            .then(data => {
                let contactList = data.contactList;
                this.setState({contactList});
            })
            .catch(err => console.log(err));
    }

    render() {
        const rows = this.state.contactList.map(
            (contact, index) => <ContactDetailsItem key={index} contact={contact}/>);
        return (
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
        )
    }
}