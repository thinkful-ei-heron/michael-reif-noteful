import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import dummyStore from './dummy-store';
import './App.css';

import Header from './Header';
import Sidebar from './Sidebar';
import NotesList from './Notes/NotesList';
import Note from './Notes/Note';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      folders: dummyStore.folders,
      notes: dummyStore.notes,
    };
  }
  render() {
    return (
      <BrowserRouter>
        <main className='App'>
          <Header />
          <section id='main-content'>
            <Route
              exact
              path='/'
              component={() => (
                <>
                  <Sidebar folders={this.state.folders} />
                  <NotesList notes={this.state.notes} />
                </>
              )}
            />
            <Route
              path='/folder/:folderid'
              component={props => (
                <>
                  <Sidebar
                    folders={this.state.folders}
                    folderId={props.match.params.folderid}
                  />
                  <NotesList
                    notes={this.state.notes.filter(
                      x => x.folderId === props.match.params.folderid
                    )}
                  />
                </>
              )}
            />
            <Route
              path='/note/:noteid'
              component={props => {
                console.log(props);
                const note = this.state.notes.find(
                  x => x.id === props.match.params.noteid
                );
                return (
                  <>
                    {console.log(props.match.params.noteid)}
                    <Sidebar
                      folderName={
                        this.state.folders.find(x => x.id === note.folderId)
                          .name
                      }
                      history={props.history}
                    />
                    <Note full={true} note={note} />
                  </>
                );
              }}
            />
            <Route path='/add_folder' />
          </section>
        </main>
      </BrowserRouter>
    );
  }
}
