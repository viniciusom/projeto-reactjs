import React, { Component } from 'react';

class Formulario extends Component {

  constructor(props) {
    super(props);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
    }
    this.state = this.stateInicial;
  }

  handlerFunction = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  submitFormulario = () => {
    this.props.handlerSubmit(this.state);
    this.setState(this.stateInicial);
  }

  render() {

    const { nome, livro, preco } = this.state;

    return (
      <form>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          value={nome}
          onChange={this.handlerFunction}
        />
        <label htmlFor="livro">Livro</label>
        <input
          id="livro"
          type="text"
          name="livro"
          value={livro}
          onChange={this.handlerFunction}
        />
        <label htmlFor="preco">Preço</label>
        <input
          id="preco"
          type="text"
          name="preco"
          value={preco}
          onChange={this.handlerFunction}
        />
        <button onClick={this.submitFormulario} type="button">Salvar
        </button>
      </form>
    );
  }
}
export default Formulario;