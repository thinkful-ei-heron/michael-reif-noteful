import React, { Component } from 'react';
import Note from './Note';

export default class NotesList extends Component {
  render() {
    return (
      <div>
        {this.props.notes.map(item => (
          <Note note={item} full={false} key={item.id} />
        ))}
      </div>
    );
  }
}
