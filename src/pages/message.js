import React from 'react'

export default React.createClass({
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
