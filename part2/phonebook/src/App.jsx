import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from './components/Filter.jsx'
import PersonForm from './components/PersonForm.jsx'
import Persons from './components/Persons.jsx'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
      .catch(error => console.error('Failed to load phonebook:', error))
  }, [])

  const addPerson = event => {
    event.preventDefault()
    const name = newName.trim()
    const number = newNumber.trim()
    if (!name || !number) return

    if (persons.some(person => person.name.toLowerCase() === name.toLowerCase())) {
      window.alert(`${name} is already added to phonebook`)
      return
    }

    const nextId = String(Math.max(0, ...persons.map(person => Number(person.id))) + 1)
    setPersons(persons.concat({ name, number, id: nextId }))
    setNewName('')
    setNewNumber('')
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
      <Persons persons={visiblePersons} />
    </div>
  )
}

export default App
