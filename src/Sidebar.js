import React, { Component } from 'react';

//props:
// folders: array of folder objects (usually)
// folderId: on folder page, id of current folder
// folderName: for Note page

export default class Sidebar extends Component {
  static defaultProps = {
    folderName: '',
  };
  render() {
    const output =
      this.props.folderName === '' ? (
        <>
          {this.props.folders.map(item => {
            return (
              <section
                className={
                  item.id === this.props.folderId
                    ? 'folder-list-item highlight'
                    : 'folder-list-item'
                }
                key={item.id}
              >
                <h3>{item.name}</h3>
                <a href={`/folder/${item.id}`}>
                  This will open the folder's notes
                </a>
              </section>
            );
          })}
          <section>
            <a href='/'>Add Folder</a>
            {/* points to AddFolder Component... NYI */}
          </section>
        </>
      ) : (
        <section>
          {' '}
          <h3>Go Back</h3>
          <h2>{this.props.folderName}</h2>
        </section>
      );
    return <section>{output}</section>;
  }
}
