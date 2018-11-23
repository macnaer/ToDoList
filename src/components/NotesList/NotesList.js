import React from "react";
import NoteItem from "../NotesItem/NoteItem";
import "./style.css";
import Masonry from "react-mason";

class NotesList extends React.Component {
  componentDidMount = () => {
    let grid = this.refs.grid;
    this.msnry = new Masonry(grid, {
      itemSelector: ".note",
      columnWidth: 200,
      gutter: 10
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="notesList" ref="grid">
        {this.props.Notes.map(note => {
          return (
            <NoteItem
              key={note.id}
              text={note.text}
              color={note.color}
              handleDeleteNotes={this.props.handleDeleteNotes.bind(null, note)}
            />
          );
        })}
      </div>
    );
  }
}

export default NotesList;
