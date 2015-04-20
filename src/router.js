import app from './app'
import Router from 'ampersand-router'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'

export default Router.extend({
  renderPage (Page, opts) {
    const Main = (
      <Layout>
        <Page/>
      </Layout>
    )

    React.render(Main, document.body)
  },

  routes: {
    '': 'public',
    'repos': 'repos'
  },

  public () {
    React.render(<PublicPage/>, document.body)
  },

  repos () {
    this.renderPage(ReposPage)
  }
})
