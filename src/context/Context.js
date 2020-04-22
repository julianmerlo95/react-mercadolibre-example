import React, { Component } from 'react';
import Axios from '../axios/axios';

export const Context = React.createContext({})

export class ContextProvider extends Component {

  state = {
    toggleMood: false,
    products: []
  }

  changeMoodHandler = () => {
    this.setState({ toggleMood: !this.state.toggleMood })
  }

  sendHttpHandler = async (product) => {
    const response = await Axios.get(product)
    this.setState({ products: response.data.results })
    console.log('LLEGO', this.state.products);
  }


  render() {
    return (
      <>
        <Context.Provider value={{
          toggleMood: this.state.toggleMood,
          changeMoodHandler: this.changeMoodHandler,
          sendHttpHandler: this.sendHttpHandler,
          products: this.state.products
        }}>
          {this.props.children}
        </Context.Provider>
      </>
    )
  }
}

export const ContextConsumer = Context.Consumer;