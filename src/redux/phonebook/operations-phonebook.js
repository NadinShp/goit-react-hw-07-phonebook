import axios from 'axios';
import * as actions from './actions-phonebook';

const fetchContacts = () => async dispatch => {
  dispatch(actions.fetchContactsRequest());

  try {
    const { data } = await axios.get('http://localhost:3015/contacts');
    dispatch(actions.fetchContactsSuccess(data));
  } catch (error) {
    dispatch(actions.fetchContactsError(error));
  }
};
const addContact = contact => async dispatch => {
  dispatch(actions.addContactRequest());

  try {
    const { data } = await axios.post(
      'http://localhost:3015/contacts',
      contact,
    );
    dispatch(actions.addContactSuccess(data));
  } catch (error) {
    dispatch(actions.addContactError(error));
  }
};
const deleteContact = id => async dispatch => {
  dispatch(actions.deleteContactRequest());
  try {
    await axios.delete(`http://localhost:3015/contacts/${id}`);
    dispatch(actions.deleteContactSuccess(id));
  } catch (error) {
    dispatch(actions.deleteContactError(error));
  }
};
export { fetchContacts, addContact, deleteContact };
