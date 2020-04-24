import React, { Component } from 'react';

export const Context = React.createContext({})

export class ContextProvider extends Component {

  state = {
    toggleMood: false
  }

  changeMoodHandler = () => {
    this.setState({ toggleMood: !this.state.toggleMood })
  }

  render() {
    return (
      <>
        <Context.Provider value={{
          toggleMood: this.state.toggleMood,
          changeMoodHandler: this.changeMoodHandler,
        }}>

          {this.props.children}

        </Context.Provider>
      </>
    )
  }
}

export const ContextConsumer = Context.Consumer;