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
    color: "#ffD700"
  },
  {
    id: 4,
    text:
      "снує багато варіацій уривків з Lorem Ipsum, але більшість з них зазнала певних змін на кшталт жартівливих вставок або змішування слів,",
    color: "#ffD700"
  },
  {
    id: 5,
    text:
      "На відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело. Lorem Ipsum походить з розділів 1.10.32 ",
    color: "brown"
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
