import React from 'react';
import {ALERT_MESSAGES, FORM_ERROR_MESSAGES} from '../constants/constants'
import {FormErrors} from "./form-errors/form-errors.component";
import {Alert} from "../core/components/alert/alert.component";
import {addContact, handleUserInput, resetForm} from "./add-contact-actions";
import {AddContactButton} from "./form-errors/add-contact-submit-button";
import {connect} from "react-redux";
import {validateAddContactField} from "../utils/contacts/contacts-helper";

const formInitialState = {
    fields: {
        name: '',
        email: '',
        phone: '',
        department: ''
    },
    errors: {
        name: '',
        email: '',
        phone: '',
        department: ''
    },
    hasError: false,
    isFormValid: false,
    alertMessage: '',
    isFormSubmissionSuccess: false
};

class AddContact extends React.Component {

    constructor(props) {
        super(props);
        this.state = JSON.parse(JSON.stringify(formInitialState));
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e, history) {
        e.preventDefault();
        this.setState(
            {
                alertMessage: ALERT_MESSAGES.SUCCESS,
                isFormSubmissionSuccess: true
            }
        );
        this.props.dispatch(addContact(this.state.fields));
        setTimeout(function () {
            this.props.resetForm();
            this.setState(
                {
                    ...JSON.parse(JSON.stringify(formInitialState))
                }
            );
            history.push('/contactDetails');
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
        let {errors, isFormValid, hasError} = validateAddContactField(key, value, this.state.errors);

        this.setState(
            {
                errors,
                isFormValid,
                hasError
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
                    {
                        this.state.hasError ?
                            <div className="panel panel-default">
                                <FormErrors formErrors={this.state.errors}/>
                            </div> : null
                    }

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
                    <div className={`form-group ${this.errorClass(this.state.errors.department)}`}>
                        <label htmlFor="department">Department</label>
                        <select className="form-control" onChange={(e) => this.handleUserInput(e)} name="department"
                                value={this.state.fields['department']}>
                            <option value=''>Select</option>
                            <option value='Development'>Development</option>
                            <option value='Testing'>Testing</option>
                        </select>
                    </div>
                    <AddContactButton handleSubmit={this.handleSubmit} isFormValid={this.state.isFormValid}/>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        editContact: state.editContact
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

const AddContactContainer = connect(mapStateToProps, mapEventsToProps)(AddContact);

export default AddContactContainer;