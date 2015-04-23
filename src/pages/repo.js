import React from 'react'
import ampersandReactMixin from 'ampersand-react-mixin'
import Label from '../components/label'

export default React.createClass({
  displayName: 'RepoPage',

  mixins: [ampersandReactMixin],

  propTypes: {
    repo: React.PropTypes.object.isRequired,
    labels: React.PropTypes.object.isRequired
  },

  onCreateClick (e) {
    e.preventDefault()

    const {repo} = this.props

    repo.labels.add({
      name: '',
      color: '',
      editing: true,
      saved: false
    }, {at: 0})
  },

  render () {
    const {repo, labels} = this.props

    return (
      <div className='container'>
        <h1>{repo.full_name} Labels</h1>
        <p>
        <button onClick={this.onCreateClick} className='button'>Create New Label</button>
        </p>
        <ul>
        {labels.map((label) =>
          <Label key={label.name} label={label} />
        )}
        </ul>
      </div>
    )
  }
})
