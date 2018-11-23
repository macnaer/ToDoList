import React from "react";
import "./style.css";

class TextItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  handleNewNoteAdd = () => {
    let newNote = {
      id: Date.now(),
      text: this.state.text,
      color: "yellow"
    };
    this.props.noteAdd(newNote);
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <div className="textAreaWrapper">
        <textarea
          className="textarea"
          placeholder="Enter your note ..."
          rows={5}
          onChange={this.handleTextChange}
        />
        <button className="btnAdd" onClick={this.handleNewNoteAdd}>
          Add
        </button>
      </div>
    );
  }
}

export default TextItem;
