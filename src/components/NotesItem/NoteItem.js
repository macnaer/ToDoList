import React from "react";
import "./style.css";

class NoteItem extends React.Component {
  render() {
    let bgk = { background: this.props.color };
    return (
      <div style={bgk} className="note">
        {this.props.text}
      </div>
    );
  }
}

export default NoteItem;
