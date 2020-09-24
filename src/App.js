import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shoes: [{ name: "Nike" }, { name: "Addidas" }],
    };
  }

  componentDidMount() {
    fetch("http://127.0.0.1:8000/api/shoe/")
      .then((res) => res.json())
      .then((data) => this.setState({ shoes: data }));
  }

  render() {
    return (
      <div>
        <h1>Shoes</h1>
        {this.state.shoes.map((s) => (
          <div key={s.id}>
            <ul>
              <li>Size: {s.size}</li>
              <li>Brand Name: {s.brand_name}</li>
              <li>
                Manufacturer: <a href={s.manufacturer}>{s.manufacturer}</a>
              </li>
              <li>
                Color: <a href={s.color}>{s.color}</a>
              </li>
              <li>Material: {s.material}</li>
              <li>
                Type: <a href={s.shoe_type}>{s.shoe_type}</a>
              </li>
              <li>Fasten Type: {s.fasten_type}</li>
              <br />
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
