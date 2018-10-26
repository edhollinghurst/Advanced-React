import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

class Signup extends Component {
  state = {
    name: '',
    password: '',
    email: '',
  };
  saveToState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Form>
        <fieldset>
          <h2>Sign up for an account!</h2>
          <label htmlFor="email">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              value={this.state.email}
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor="name">
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={this.state.name}
              onChange={this.saveToState}
            />
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={this.state.password}
              onChange={this.saveToState}
            />
          </label>
          <button type="submit">Sign Up!</button>
        </fieldset>
      </Form>
    );
  }
}

export default Signup;
