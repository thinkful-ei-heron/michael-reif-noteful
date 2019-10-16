import React, { Component } from 'react';
import './Sidebar.css';

export default class Sidebar extends Component {
  static defaultProps = {
    folderName: '',
  };
  render() {
    const output =
      // check if folderName prop was passed in
      this.props.folderName === '' ? (
        <>
          {this.props.folders.map(item => {
            return (
              <a
                href={`/folder/${item.id}`}
                className={
                  item.id === this.props.folderId
                    ? 'folder-list-item highlight'
                    : 'folder-list-item'
                }
                key={item.id}
              >
                <h3>{item.name}</h3>
              </a>
            );
          })}
          <a id='add-folder' href='/'>
            Add Folder
          </a>
        </>
      ) : (
        <>
          <button
            id='go-back-button'
            type='button'
            onClick={this.props.history.goBack}
          >
            <h3>Go Back</h3>
          </button>
          <h2 id='folder-name-left'>{this.props.folderName}</h2>
        </>
      );
    return <section id='sidebar-container'>{output}</section>;
  }
}
