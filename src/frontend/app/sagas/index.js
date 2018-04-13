import { getAllContacts, watchGetContacts } from "./contact-details.saga";
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([fork(getAllContacts), fork(watchGetContacts)]);
}