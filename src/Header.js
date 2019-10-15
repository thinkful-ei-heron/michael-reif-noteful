import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header id='noteful-header'>
        <h1>
          <a href='/'>Noteful</a>
        </h1>
      </header>
    );
  }
}
