import React from 'react';
import {ALERT_MESSAGES, FORM_ERROR_MESSAGES} from '../../constants/constants'
import {FormErrors} from "./form_errors/form_errors.component";
import {Alert} from "../../shared/components/alert/alert.component";
import {store} from "../../index";
import {addContact} from "./add_contact_actions";

const formInitialState = {
    fields: {
        name: '',
        email: '',
        phone: ''
    },
    errors: {
        name: '',
        email: '',
        phone: ''
    },
    isFormValid: false,
    alertMessage: '',
    isFormSubmissionSuccess: false
};

export default class AddContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = JSON.parse(JSON.stringify(formInitialState));
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState(
            {
                alertMessage: ALERT_MESSAGES.SUCCESS,
                isFormSubmissionSuccess: true
            }
        );
        store.dispatch(addContact(this.state.fields));
        setTimeout(function () {
            this.props.resetForm();
            this.setState(
                {
                    ...JSON.parse(JSON.stringify(formInitialState))
                }
            )
        }.bind(this), 1000);
    }

    handleUserInput(e) {
        let key = e.target.name;
        let value = e.target.value;
        let fields = this.state.fields;
        fields[key] = value;
        this.setState(
            {fields},
            () => this.validateField(key, value)
        );
    }


    validateField(key, value) {
        let errors = this.state.errors;
        let isFormValid = true;

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
                    errors.phone = (value.length !== 10) ? FORM_ERROR_MESSAGES[key].invalid : '';
                    break;

            }
        }

        Object.keys(errors).every(field => {
            if (errors[field] && !!errors[field].length) {
                isFormValid = false;
            }

            return isFormValid;
        });

        this.setState(
            {
                errors,
                isFormValid
            }
        )
    }

    errorClass(error) {
        return error && error.length > 0 ? 'has-error' : '';
    }

    render() {
        const fields = this.props.editContact;
        if (!!Object.keys(fields).length) {
            const isFormValid = true;
            this.state = {
                ...this.state,
                isFormValid,
                fields
            }
        }

        return (
            <div>
                <form className="contactForm">
                    <h3>Add Contact</h3>
                    <Alert message={this.state.alertMessage}
                           isFormSubmissionSuccess={this.state.isFormSubmissionSuccess}/>
                    <div className="panel panel-default">
                        <FormErrors formErrors={this.state.errors}/>
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.errors.name)}`}>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control"
                               onChange={(e) => this.handleUserInput(e)}
                               value={this.state.fields['name']}
                               name="name"/>
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.errors.email)}`}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control"
                               onChange={(e) => this.handleUserInput(e)}
                               value={this.state.fields['email']}
                               name="email"/>
                    </div>
                    <div className={`form-group ${this.errorClass(this.state.errors.phone)}`}>
                        <label htmlFor="phone">Phone</label>
                        <input type="text" className="form-control"
                               onChange={(e) => this.handleUserInput(e)}
                               value={this.state.fields['phone']}
                               name="phone"/>
                    </div>
                    <button type="submit" onClick={this.handleSubmit} disabled={!this.state.isFormValid}
                            className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}