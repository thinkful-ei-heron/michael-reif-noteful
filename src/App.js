import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import dummyStore from './dummy-store';
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
          <Header /> {/* constant */}
          <section className='main-content'>
            {/* Default to showing all notes */}
            {/* https://tf-curricula-prod.s3.amazonaws.com/curricula/da13a510-00f5-4649-9416-c29d8f2f4761/ei-react-v1/assets2/react_routing/main-route-wireframe.png */}
            <Route
              exact
              path='/'
              component={() => (
                <>
                  <Sidebar folders={this.state.folders} />
                  {/* Needs props for folder list */}
                  <NotesList notes={this.state.notes} />
                  {/* props for note list with all notes*/}
                </>
              )}
            />
            {/* https://tf-curricula-prod.s3.amazonaws.com/curricula/da13a510-00f5-4649-9416-c29d8f2f4761/ei-react-v1/assets2/react_routing/folder-route-wireframe.png */}
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
            {/* https://tf-curricula-prod.s3.amazonaws.com/curricula/da13a510-00f5-4649-9416-c29d8f2f4761/ei-react-v1/assets2/react_routing/note-route-wireframe.png */}
            <Route
              path='/note/:noteid'
              component={props => {
                const note = this.state.notes.find(
                  x => x.id === props.match.params.noteid
                );
                return (
                  <>
                    {console.log(props.match.params.noteid)}
                    {/* 
                  this.state.folders.find(x => x.id === this.state.notes.find(x => x.id === noteid)).name
                   */}
                    <Sidebar
                      folderName={
                        this.state.folders.find(x => x.id === note.folderId)
                          .name
                      }
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

// <Route exact path='/' component={MainContent} />
// in MainContent default SideBar and NotesList
// <Route
//  exact
//  path='/folder/:folderid'
//  component={() => <MainContent NotesList={NotesList} />}
///>
// :folderid comes from state

// Dynamic route - matches /user/joe, /user/tauhida, etc.
// <Route exact path="/user/:username" component={User} />
//
// example from lesson
// function Example() {
//   return <>
//     <Sidebar>
//       <Route path='/' component={MainSidebar} />
//       <Route path='/foo' component={FooSidebar} />
//     </Sidebar>
//     <Main>
//       <Route path='/' component={MainMain} />
//       <Route path='/foo' component={FooMain} />
//     </Main>
//   </>
// }
//<Route
//   path='/foo'
//   render={(routerProps) =>
//     <FooSidebar
//       aFoo={this.state.foos.find(foo => foo.id === routeProps.match.params.foodId)}
//     />
//   }
// />

/**
 * / <-- show all notes and folder list
 * /folder/id <-- show notes in selected folder, highlight selected folder in sidebar
 * /note/id <-- show selected note
 *              replace folder sidebar with 'go back'
 *              and folder name
 *              replace main body with note + details
 */
