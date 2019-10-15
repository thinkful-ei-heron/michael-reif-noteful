import React, { Component } from 'react';
import Note from './Note';

export default class NotesList extends Component {
  render() {
    return (
      <ul id='noteslist-container'>
        {this.props.notes.map(item => (
          <Note note={item} full={false} key={item.id} />
        ))}
      </ul>
    );
  }
}
