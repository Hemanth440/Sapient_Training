import React from 'react';

function getClassName(isFormSubmissionSuccess) {
    return isFormSubmissionSuccess ? 'alert-success' : 'alert-danger';
}

export const Alert = ({message, isFormSubmissionSuccess}) =>
    <div>
        {
            (message && message.length) ?
                <div className={`alert ${getClassName(isFormSubmissionSuccess)}`} role="alert">
                    {message}
                </div> : null
        }
    </div>
