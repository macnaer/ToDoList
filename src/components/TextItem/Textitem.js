import React from "react";
import "./style.css";

class TextItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      error: ""
    };
  }

  handleTextChange = event => {
    this.setState({
      text: event.target.value
    });
  };
  handleNewNoteAdd = () => {
    console.log("Before", this.state.text);
    if (this.state.text) {
      let newNote = {
        id: Date.now(),
        text: this.state.text,
        color: "yellow"
      };
      this.props.noteAdd(newNote);
    }
    if (this.state.text.length === 0) {
      this.setState({ error: "You can't add empty note!" });
    } else {
      this.setState({ error: "" });
    }
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
        {this.state.error !== "" ? <div>{this.state.error}</div> : <div />}
      </div>
    );
  }
}

export default TextItem;
