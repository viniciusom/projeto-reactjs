import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';
import Form from './Formulario';

class App extends Component {
  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000',
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99',
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150',
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100',
      },
      {
        nome: 'Nico',
        livro: 'Java',
        preco: '9999',
      },
    ],
  };

  removeAutor = index => {
    const { autores } = this.state;
    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          console.log(index, posAtual);
          return posAtual !== index;
        }),
      },
    );
  }

  handlerSubmit = autor => {
    this.setState({ autores: [...this.state.autores, autor]})
  }

  render() {
    return (
      <>
        <Tabela autores = { this.state.autores } removeAutor = { this.removeAutor } />
        <Form handlerSubmit = {this.handlerSubmit} />
      </>
    );
  }
  
}

export default App;