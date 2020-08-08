import React from 'react'

export const GlobalContext = React.createContext()

export class GlobalContextProvider extends React.Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return (
      <GlobalContext.Provider value={{
        data: this.state,
        updateState: (field, newState) => this.setState({ [field]: newState }),
        updateMultipleState: (field, newState) => this.setState({ [field]: { ...this.state[field], ...newState } })
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {
      context => <ChildComponent {...props} global={context} />
    }
  </GlobalContext.Consumer>
)