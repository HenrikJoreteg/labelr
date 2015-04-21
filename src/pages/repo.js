import React from 'react'
import ampersandReactMixin from 'ampersand-react-mixin'

export default React.createClass({
    mixins: [ampersandReactMixin],

    render () {
        const {repo, labels} = this.props

        return (
            <div className='container'>
              <h1>{repo.full_name} Labels</h1>
              <p>Create New Label</p>
              <ul>
                {labels.map((label) =>
                    <li key={label.name}>{label.name}</li>
                )}
              </ul>
            </div>
        )
    }
})