import React from 'react'
import styles from './styles/main.styl'

const Hello = React.createClass({
  render () {
    return <h1>Hello {this.props.name}</h1>
  }
})

React.render(<Hello name="henrik"/>, document.body)
