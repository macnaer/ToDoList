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

  componentDidMount() {
    let localNotes = JSON.parse(localStorage.getItem("notes"));
    if (localNotes) {
      this.setState({
        Notes: localNotes
      });
    }
  }

  updateStorage() {
    let notes = JSON.stringify(this.state.Notes);
    localStorage.setItem("notes", notes);
  }

  handleAddNote = newNote => {
    let newNotes = this.state.Notes.slice();
    newNotes.unshift(newNote);
    this.setState(
      {
        Notes: newNotes
      },
      this.updateStorage
    );
  };

  render() {
    return (
      <div>
        <h2>ToDoList</h2>
        <Textarea noteAdd={this.handleAddNote} />
        <NotesList Notes={this.state.Notes} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
