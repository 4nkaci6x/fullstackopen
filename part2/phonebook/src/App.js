import { useState, useEffect } from 'react';
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import dbService from './services/persons';

import './App.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [newSearch, setNewSearch] = useState('');
  const [personsToShow, setPersonsToShow] = useState([]);

  useEffect(() => {
    dbService.getAll().then(listOfPersons => {
      setPersons(listOfPersons);
      setPersonsToShow(listOfPersons);
    });
  }, []);

  const findByName = name => {
    return persons.filter(person => {
      return person.name.toLowerCase() === name.toLowerCase();
    });
  };

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   if (
  //     persons.find(
  //       person => person.name.toLowerCase() === newName.toLowerCase()
  //     )
  //   ) {
  //     alert(`${newName} is already added to phonebook`);
  //   } else if (newName === '' || newNumber === '') {
  //     alert(`Both name and number fields can't be blank`);
  //   } else {
  //     const newPerson = {
  //       name: newName,
  //       number: newNumber
  //     };
  //     dbService.create(newPerson).then(response => {
  //       const updatedPersons = persons.concat(response);
  //       setPersons(updatedPersons);
  //       setPersonsToShow(updatedPersons);
  //     });
  //   }
  //   setNewNumber('');
  //   setNewName('');
  //   event.target.name.focus();
  // };
  const handleSubmit = event => {
    event.preventDefault();
    if (
      persons.find(
        person => person.name.toLowerCase() === newName.toLowerCase()
      ) &&
      newNumber !== ''
    ) {
      if (
        window.confirm(
          `"${newName}" is already added to phonebook, replace the old number with a new one?`
        )
      ) {
        const id = findByName(newName)[0].id;
        const person = persons.find(p => p.id === id);
        const updatedPerson = { ...person, number: newNumber };
        dbService.update(id, updatedPerson).then(response => {
          const updatedList = persons.map(p => (p.id !== id ? p : response));
          setPersons(updatedList);
          setPersonsToShow(updatedList);
        });
      }
    } else if (newName === '' || newNumber === '') {
      alert(`Both name and number fields can't be blank`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      };
      dbService.create(newPerson).then(response => {
        const updatedPersons = persons.concat(response);
        setPersons(updatedPersons);
        setPersonsToShow(updatedPersons);
      });
    }
    setNewNumber('');
    setNewName('');
    event.target.name.focus();
  };

  const handleNewNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleNewSearch = event => {
    setNewSearch(event.target.value);
    const personsToShow = persons.filter(person =>
      person.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setPersonsToShow(personsToShow);
  };

  const handleDelete = id => {
    dbService.getOne(id).then(response => {
      const name = response.name;
      if (window.confirm(`Delete "${name}"?`)) {
        dbService.remove(id).then(response => {
          const filtered = persons.filter(person => person.id !== id);
          setPersons(filtered);
          setPersonsToShow(filtered);
        });
      }
    });
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleNewSearch={handleNewSearch} />
      <h2>add a new</h2>

      <PersonForm
        handleSubmit={handleSubmit}
        handleNewNumberChange={handleNewNumberChange}
        handleNewNameChange={handleNewNameChange}
        newNumber={newNumber}
        newName={newName}
      />

      <h2>Numbers</h2>
      <Persons persons={personsToShow} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
