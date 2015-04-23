import React from 'react'

export default React.createClass({
  displayName: 'MessagePage',

  propTypes: {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired
  },

  render () {
    const {title, body} = this.props

    return (
      <div className='container'>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    )
  }
})
