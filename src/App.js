import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import dummyStore from './dummy-store';
import Header from './Header';
import Sidebar from './Sidebar';
import NotesList from './Notes/NotesList';

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
            <Route
              path='/folder/:folderid'
              component={() => (
                <>
                  <Sidebar />
                  <NotesList />
                </>
              )}
            />
            {/* Sidebar relies on route/props,  :folderid/:noteid */}
            {/* NotesList relies on route/props, :folderid + folder */}
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
