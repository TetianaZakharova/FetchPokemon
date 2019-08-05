//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      img: null,
      name: null,
    };
  }
  
  componentDidMount() {
      fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*721)}/`)
      .then(data => data.json())
      .then((pokemonObj => {
        this.setState ({img: pokemonObj.sprites.front_default, name: pokemonObj.name})
      }))
      .catch(error => console.error(error));
  }

  render() {
    const {img, name} = this.state;

      return (
          <div className="pokiBorder">
              <img className="pokiImg" src={img} alt="Pokemon Image" />
              <p className="pokiName">{name}</p>
          </div>
      );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#container')
);


