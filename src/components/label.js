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

    if (!label.editing) {
      if (label.saved) {
        this.setState(this.getInitialState())
      } else {
        label.collection.remove(label)
      }
    }
  },

  onChangeName (e) {
    this.setState({
      name: e.target.value
    })
  },

  onChangeColor (e) {
    this.setState({
      color: e.target.value
    })
  },

  onFormSubmit (e) {
    e.preventDefault()

    const {label} = this.props

    if (label.saved) {
      label.update(this.state)
    } else {
      label.save(this.state)
      label.saved = true
    }
    label.editing = false
  },

  onDeleteClick (e) {
    e.preventDefault()

    const {label} = this.props
    const {collection} = label
    const old = collection.models.slice()

    label.destroy({
      error () {
        collection.reset(old)
      }
    })
  },

  render () {
    const {label} = this.props
    const {color, name} = this.state
    const backgroundColor = `#${color}`
    const styles = {backgroundColor}

    if (label.editing) {
      return (
       <form className='label' onSubmit={this.onFormSubmit}>
         <span style={styles} className='label-color avatar avatar-small avatar-rounded'>&nbsp;</span>
         <input value={name} onChange={this.onChangeName} name='name'/>
         <input value={color} onChange={this.onChangeColor} name='color'/>
         <button type='submit' className='button button-small'>Save</button>
         <button onClick={this.onEditClick} type='button' className='button button-small button-unstyled'>cancel</button>
       </form>
      )
    } else {
      return (
        <div className='label'>
          <span style={styles} className='label-color'>&nbsp;</span>
          <span>{label.name}</span>
          <button onClick={this.onEditClick} className='octicon octicon-pencil'></button>
          <button onClick={this.onDeleteClick} className='octicon octicon-x'></button>
        </div>
      )
    }
  }
})
