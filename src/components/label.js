import React from 'react'
import ampersandReactMixin from 'ampersand-react-mixin'

export default React.createClass({
  mixins: [ampersandReactMixin],

  getInitialState () {
    const {color, name} = this.props.label
    return {
      color,
      name
    }
  },

  onEditClick (e) {
    e.preventDefault()

    const {label} = this.props

    label.editing = !label.editing
  },

  onDeleteClick () {

  },

  render () {
    const {label} = this.props
    const {color, name} = this.state

    if (label.editing) {
      return (
       <form className='label'>
         <span className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
         <input name='name'/>
         <input name='color'/>
         <button type='submit' className='button button-small'>Save</button>
         <button type='button' className='button button-small button-unstyled'>cancel</button>
       </form>
      )
    } else {
      return (
        <div className='label'>
          <span style={{backgroundColor: '#' + label.color}} className='label-color'>&nbsp;</span>
          <span>{label.name}</span>
          <button onClick={this.onEditClick} className='octicon octicon-pencil'></button>
          <button onClick={this.onDeleteClick} className='octicon octicon-x'></button>
        </div>
      )
    }
  }
})