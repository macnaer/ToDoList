import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Textarea from "./components/TextItem/Textitem";
import NotesList from "./components/NotesList/NotesList";

let NodesArray = [
  {
    id: 1,
    text:
      "Lorem Ipsum - це текст-риба, що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично",
    color: "red"
  },
  {
    id: 2,
    text:
      "Вже давно відомо, що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад,",
    color: "yellow"
  },
  {
    id: 3,
    text:
      "На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е.,",
    color: "pink"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Notes: NodesArray };
  }

  render() {
    return (
      <div>
        <h2>ToDoList</h2>
        <Textarea />
        <NotesList Notes={this.state.Notes} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
