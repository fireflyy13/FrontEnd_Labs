import React, { Component } from "react";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstColor: "",
      firstBg: "",
      secondColor: "",
      secondBg: "",
    };
  }

  getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++)
      color += letters[Math.floor(Math.random() * 16)];
    return color;
  }

  handleFirstClick = () => {
    this.setState({
      firstColor: this.getRandomColor(),
      firstBg: this.getRandomColor(),
    });
  };

  handleSecondClick = () => {
    this.setState({
      secondColor: this.getRandomColor(),
      secondBg: this.getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <p>Хоббі:</p>
        <ul>
          <li>Музика</li>
          <li>Читання</li>
          <li>Малювання</li>

          <li
            id="first"
            onClick={this.handleFirstClick}
            style={{
              color: this.state.firstColor,
              backgroundColor: this.state.firstBg,
              cursor: "pointer",
            }}
          >
            Спорт
          </li>
        </ul>

        <p
          id="second"
          onClick={this.handleSecondClick}
          style={{
            color: this.state.secondColor,
            backgroundColor: this.state.secondBg,
            cursor: "pointer",
          }}
        >
          Улюблені фільми та книги:
        </p>

        <ol>
          <li>Спілка мертвих поетів (фільм)</li>
          <li>Інтерстеллар (фільм)</li>
          <li>Маленькі жінки (книга)</li>
        </ol>
      </div>
    );
  }
}

export default Content;
