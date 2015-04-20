import app from 'ampersand-app'
import Router from 'ampersand-router'
import qs from 'qs'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import Layout from './layout'
import xhr from 'xhr'

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
    'repos': 'repos',
    'login': 'login',
    'auth/callback?code=:code': 'authCallback'
  },

  public () {
    React.render(<PublicPage/>, document.body)
  },

  repos () {
    this.renderPage(ReposPage)
  },

  login () {
    window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({
      scope: 'user,repo',
      redirect_uri: window.location.origin + '/auth/callback',
      client_id: 'f8dd69187841cdd22a26'
    })
  },

  authCallback (code) {
    xhr({
      url: 'https://labelr-dev.herokuapp.com/authenticate/' + code,
      json: true
    }, (err, resp, body) => {
      if (err) {
        console.error('bad code')
      }
      app.me.token = body.token
      this.redirectTo('/repos')
    })
  }
})
