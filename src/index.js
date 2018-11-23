import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Textarea from "./components/TextItem/Textitem";
import NotesList from "./components/NotesList/NotesList";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Notes: [] };
  }

  componentDidMount = () => {
    let localNotes = JSON.parse(localStorage.getItem("notes"));
    if (localNotes) {
      this.setState({
        Notes: localNotes
      });
    }
  };

  handleDeleteNotes = note => {
    let noteId = note.id;
    let newNotes = this.state.Notes.filter(function(note) {
      return note.id !== noteId;
    });
    this.setState({ Notes: newNotes });
  };

  componentDidUpdate = () => {
    this.updateStorage();
  };

  updateStorage = () => {
    let notes = JSON.stringify(this.state.Notes);
    localStorage.setItem("notes", notes);
  };

  handleAddNote = newNote => {
    let newNotes = this.state.Notes.slice();
    newNotes.unshift(newNote);
    this.setState({
      Notes: newNotes
    });
  };

  render() {
    return (
      <div className="app">
        <h2 className="header">ToDoList</h2>
        <Textarea noteAdd={this.handleAddNote} />
        <NotesList
          Notes={this.state.Notes}
          handleDeleteNotes={this.handleDeleteNotes}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
