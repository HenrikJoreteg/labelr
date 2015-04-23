import React from 'react'
import InternalNav from './components/internal-nav'
import ampersandReactMixin from 'ampersand-react-mixin'

export default React.createClass({
  displayName: 'Layout',

  mixins: [ampersandReactMixin],

  propTypes: {
    me: React.PropTypes.object.isRequired,
    children: React.PropTypes.element.isRequired
  },

  render () {
    const {me} = this.props

    return (
      <InternalNav>
        <div>
          <nav className='top-nav top-nav-light cf' role='navigation'>
            <input id='menu-toggle' className='menu-toggle' type='checkbox'/>
            <label htmlFor='menu-toggle'>Menu</label>
            <ul className='list-unstyled list-inline cf'>
              <li>Labelr</li>
              <li><a href='/repos'>Repos</a></li>
              <li className='pull-right'>
                <span>{me.login}</span>
                <a href='/logout'>Logout</a>
              </li>
            </ul>
          </nav>
          <div className='container'>
            {this.props.children}
          </div>
        </div>
      </InternalNav>
    )
  }
})
