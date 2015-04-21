import React from 'react'

export default React.createClass({
    render () {
        const {label} = this.props

        return (
            <div className='label'>
              <span className='label-color'>&nbsp;</span>
              <span>{label.name}</span>
              <span className='octicon octicon-pencil'></span>
              <span className='octicon octicon-x'></span>
            </div>
        )
    }
})