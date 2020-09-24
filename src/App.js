import React from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [{ name: "Nike" }, { name: "Addidas" }],
    };
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.shoes.map((s) => (
            <li>{s.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
