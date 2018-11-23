import React from "react";
import NoteItem from "../NotesItem/NoteItem";

class NotesList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.Notes.map(note => {
          return <NoteItem key={note.id} text={note.text} color={note.color} />;
        })}
      </div>
    );
  }
}

export default NotesList;
