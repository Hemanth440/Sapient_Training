import React from 'react';
import {withRouter} from "react-router-dom";

export const AddContactButton = withRouter(({history, handleSubmit, isFormValid}) =>
    <button type="submit" onClick={(e) => handleSubmit(e, history)} disabled={!isFormValid}
            className="btn btn-primary">
        Submit
    </button>
)