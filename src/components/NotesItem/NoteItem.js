import React from "react";

class NoteItem extends React.Component {
  render() {
    let bgk = { background: this.props.color };
    return <div style={bgk}>{this.props.text}</div>;
  }
}

export default NoteItem;
