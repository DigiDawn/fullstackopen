import React, { useEffect, useState } from 'react'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => setPersons(initialPersons))
      .catch(error => {
        console.error('Failed to load phonebook:', error)
        window.alert('Could not load contacts. Check that JSON Server is running on port 3001.')
      })
  }, [])

  const clearForm = () => {
    setNewName('')
    setNewNumber('')
  }

  const addPerson = async event => {
    event.preventDefault()
    const name = newName.trim()
    const number = newNumber.trim()
    if (!name || !number) return

    const existingPerson = persons.find(
      person => person.name.toLowerCase() === name.toLowerCase()
    )

    try {
      if (existingPerson) {
        if (!window.confirm(`${existingPerson.name} is already added to phonebook, replace the old number with a new one?`)) {
          return
        }
        const updatedPerson = await personService.update(existingPerson.id, {
          ...existingPerson,
          number
        })
        setPersons(current => current.map(person =>
          person.id === existingPerson.id ? updatedPerson : person
        ))
      } else {
        // Let JSON Server generate the ID; do not calculate it from the local list.
        const createdPerson = await personService.create({ name, number })
        setPersons(current => current.concat(createdPerson))
      }
      clearForm()
    } catch (error) {
      console.error('Failed to save contact:', error)
      window.alert('Could not save this contact. Please try again.')
    }
  }

  const deletePerson = async person => {
    if (!window.confirm(`Delete ${person.name}?`)) return

    try {
      await personService.remove(person.id)
      setPersons(current => current.filter(item => item.id !== person.id))
    } catch (error) {
      console.error('Failed to delete contact:', error)
      window.alert(`Could not delete ${person.name}. Please try again.`)
    }
  }

  const visiblePersons = persons.filter(person =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onChange={event => setFilter(event.target.value)} />
      <h3>Add a new</h3>
      <PersonForm
        onSubmit={addPerson}
        newName={newName}
        onNameChange={event => setNewName(event.target.value)}
        newNumber={newNumber}
        onNumberChange={event => setNewNumber(event.target.value)}
      />
      <h3>Numbers</h3>
      <Persons persons={visiblePersons} onDelete={deletePerson} />
    </div>
  )
}

export default App
