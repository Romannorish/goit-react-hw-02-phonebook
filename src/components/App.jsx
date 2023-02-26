import React from "react";
import { nanoid } from 'nanoid';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';


export class App extends React.Component {
  
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    // console.log(data);

    let contacts = this.state.contacts;

    let arrayName = contacts.map(contact => contact.name);
    arrayName.includes(contact.name)
      ? window.alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
  };
 

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  
  handlerRemoveButton = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));

    this.setState({ filter: '' });
  };

 

  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        
        <Section title='Contacts'>
          <Filter
            value={this.state.filter}
            onChange={this.changeFilter}
          />
          <ContactList
            contacts={visibleContacts}
            onClick={this.handlerRemoveButton}
          />
        </Section>
      </>
    )
  }
  
};