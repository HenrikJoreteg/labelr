import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'

export default Router.extend({
  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    React.render(<PublicPage/>, document.body)
  },

  repos () {
    console.log('repos page')
  }
})
