import React from 'react';
import {ALERT_MESSAGES, FORM_ERROR_MESSAGES} from '../constants/constants'
import {FormErrors} from "./form-errors/form-errors.component";
import {Alert} from "../core/components/alert/alert.component";
import {addContact, handleUserInput, resetForm} from "./add-contact-actions";
import {AddContactButton} from "./form-errors/add-contact-submit-button";
import {connect} from "react-redux";
import {validate} from "../utils/contacts/contacts-helper";
import {reduxForm, Field} from 'redux-form';
import './add-contact-form.css';
import { withRouter } from 'react-router-dom';

const createRenderer = render => ({input, meta, label, ...rest}) =>
	<div
		className={
			[
				'form-group',
				meta.error && meta.touched ? 'has-error' : '',
				meta.active ? 'active' : ''
			].join(' ')
		}
	>
		<label>
			{label}
		</label>
		{render(input, label, rest)}
		{
			meta.error &&
			meta.touched &&
			<span className="error">{meta.error}</span>
		}
	</div>

export const RenderInput = createRenderer((input, label) => 
	<input className="form-control"  {...input} placeholder={label}/>
)


export const RenderSelect = createRenderer((input, label, {children}) => 
	<select className="form-control"  {...input} >
		{children}
	</select>
)

class AddContactForm extends React.Component {

    constructor(props) {
        super(props);
        this.addContact = this.addContact.bind(this);
    }

    addContact(values) {
        this.props.dispatch(addContact(values));
        setTimeout(function () {
            this.props.reset();
            this.props.resetForm();
            this.props.history.push("/contactDetails");
        }.bind(this), 1000);
    }

    render() {
        const {invalid, pristine, handleSubmit, initialValues} = this.props;

		return (
			<div>
				<form className="contactForm" onSubmit={handleSubmit(this.addContact)}>
					<h3>Add Contact</h3>
					<Field name="name" label="Name" component={RenderInput}/>
					<Field name="email" label="Email" component={RenderInput}/>
					<Field name="phone" label="Phone" component={RenderInput}/>
					<Field name="department" label="Department" component={RenderSelect}>
						<option value=''>Select</option>
						<option value='Development'>Development</option>
						<option value='Testing'>Testing</option>
					</Field>
					<button type="submit" className="btn btn-primary" disabled={invalid || (pristine && !Object.keys(initialValues).length)}>Submit</button>
				</form>
			</div>
        )
    }
}

function mapStateToProps(state) {
    return {
        editContact: state.editContact,
        initialValues: state.editContact
    }
}

function mapEventsToProps(dispatch) {
    return {

        resetForm() {
            dispatch(resetForm());
        },

        dispatch
    };
}

let AddContact = reduxForm({
	form: 'AddContactForm',
    validate,
    enableReinitialize: true
})(AddContactForm);

AddContact = connect(mapStateToProps, mapEventsToProps)(AddContact);

export default withRouter(AddContact);