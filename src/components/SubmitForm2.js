import React, { Component } from 'react'
import isEmail from 'validator/lib/isEmail'
export default class SubmitForm2 extends Component {
  static displayName = '06-state-input'

  state = {
    fields: {
      name: '',
      email: ''
    },
    fieldErrors: {},
    people: []
  }

    onFormSubmit = (evt) => {
      const people = [
        ...this.state.people
      ]
      const person = this.state.fields
      const fieldErrors = this.validate(person)
      this.setState({ fieldErrors })
      evt.preventDefault()
      if (Object.keys(fieldErrors).length) return
      this.setState({
        people: people.concat(person),
        fields: {
          name: '',
          email: ''
        }
      })
    }

onInputChange = (evt) => {
  const fields = this.state.fields
  fields[evt.target.name] = evt.target.value
  this.setState({ fields })
}

validate = (person) => {
  const errors = {}
  if (!person.name) errors.name = 'Name Required'
  if (!person.email) errors.email = 'Email Required'
  if (person.email && !isEmail(person.email)) errors.email = 'Invalid Email'
  return errors
}

render () {
    return (
      <div>
        <h1>Sign Up Sheet</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            className='input'
            placeholder='Name'
            name='name'
            value={this.state.fields.name}
            onChange={this.onInputChange}
          />
          <span style={{ color: 'red' }}>{ this.state.fieldErrors.name }</span>
          <br />
          <input
            className='input'
            placeholder='Email'
            name='email'
            value={this.state.fields.email}
            onChange={this.onInputChange}
          />
          <span style={{ color: 'red' }}>{ this.state.fieldErrors.email }</span>
          <br />
          <input
            className='input'
            type='submit' />
        </form>
        <div>
          <ul>
            { this.state.people.map(({ name, email }, i) =>
              <li key={i}>{name} ({ email })</li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}
