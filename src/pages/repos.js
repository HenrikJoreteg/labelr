import React from 'react'
import ampersandReactMixin from 'ampersand-react-mixin'

export default React.createClass({
  displayName: 'ReposPage',

  mixins: [ampersandReactMixin],

  propTypes: {
    repos: React.PropTypes.object.isRequired
  },

  render () {
    const {repos} = this.props

    return (
      <div className='container'>
        <h1>Repos</h1>
        <ul>
            {repos.map((repo) =>
                <li key={repo.id}>
                    <a href={repo.appUrl}>{repo.full_name}</a>
                </li>
            )}
        </ul>
      </div>
    )
  }
})
