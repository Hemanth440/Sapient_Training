export const FORM_ERROR_MESSAGES = {
    name: {
        required: 'Name is required'
    },
    email: {
        required: 'Email is required',
        invalid: 'Please enter valid email'
    },
    phone: {
        required: 'Phone number is required',
        invalid: 'Phone number length must be 10'
    },
    department: {
        required: 'Department is required'
    }
};

export const TABS_LIST = [
    {
        name: 'Home',
        url: '/',
        isRootUrl: true
    },
    {
        name: 'Contact Details',
        url: '/contactDetails'
    },
    {
        name: 'About Us',
        url: '/about'
    }
];

export const ALERT_MESSAGES = {
    SUCCESS: 'Form has been submitted successfully',
    FAILED: 'Form submission failed'
};

export const BASE_URL = 'http://localhost:8080';