import React from 'react'
import ampersandReactMixin from 'ampersand-react-mixin'
import Label from '../components/label'

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
                    <Label key={label.name} label={label} />
                )}
              </ul>
            </div>
        )
    }
})