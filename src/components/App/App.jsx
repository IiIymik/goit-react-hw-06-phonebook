// import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Form from '../Form/Form';
import { Container, TitleMain, TitleBook, } from './App.styled.js'
import ContactsList from '../ContactsList/ContactsList';
import Filter from '../Filter/Filter';
import * as actions from 'redux/contacts/contacts-actions';


function App({ contacts, filter, addContact, deleteContact, addFilterValue }) {

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter))
  }

  return (
    <Container>
      <TitleMain>Phonebook</TitleMain>
      <Form onSubmit={addContact} data={contacts} />
      <TitleBook>Contacts</TitleBook>
      <Filter onChange={(e) => addFilterValue(e.currentTarget.value)} value={filter} />
      <ContactsList contacts={getVisibleContacts(contacts)} onDeleteContact={deleteContact} />
    </Container>
  )
}

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
})

const mapDispatchToProps = dispatch => ({
  addContact: (obj) => dispatch(actions.addContact(obj)),
  deleteContact: (contactId) => dispatch(actions.deleteContact(contactId)),
  addFilterValue: (value) => dispatch(actions.addFilterValue(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);







