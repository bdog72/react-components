import React, { Component } from 'react'

export default class SubmitForm1 extends Component {
    static displayName = '05-state-input'
    state = {
      name: '',
      names: []
    }

    onFormSubmit = (evt) => {
      const names = [ ...this.state.names, this.state.name ]
      this.setState({ names: names, name: '' })
      evt.preventDefault()
    }
  onNameChange = (evt) => {
    this.setState({ name: evt.target.value })
  }

  render () {
    return (
      <div>
        <h1>Sign Up Sheet</h1>
        <form onSubmit={this.onFormSubmit}>
          <input
            className='input'
            placeholder='Name'
            value={this.state.name}
            onChange={this.onNameChange}
          />
          <input
            className='input'
            type='submit' />
        </form>
        <div>
          <h3>Names</h3>
          <ul>
            { this.state.names.map((name, i) => <li key={i}>{name}</li>) }
          </ul>
        </div>
      </div>
    )
  }
}
