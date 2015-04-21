import app from 'ampersand-app'
import Router from 'ampersand-router'
import qs from 'qs'
import React from 'react'
import PublicPage from './pages/public'
import ReposPage from './pages/repos'
import MessagePage from './pages/message'
import Layout from './layout'
import xhr from 'xhr'

const auth = function (name) {
  return function () {
    if (app.me.isLoggedIn) {
      this[name].apply(this, arguments)
    } else {
      this.redirectTo('/')
    }
  }
}

export default Router.extend({
  renderPage (Page, opts = {}) {
    const Main = (
      <Layout me={app.me}>
        <Page {...opts}/>
      </Layout>
    )

    React.render(Main, document.body)
  },

  routes: {
    '': 'public',
    'repos': auth('repos', 'super-user'),
    'login': 'login',
    'logout': 'logout',
    'auth/callback?code=:code': 'authCallback',
    '*404': 'fourOhFour'
  },

  public () {
    React.render(<PublicPage/>, document.body)
  },

  repos () {
    this.renderPage(ReposPage, {repos: app.me.repos})
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
        this.renderPage(MessagePage, {title: 'Sorry', body: 'did not work'})
        console.error('bad code')
      }
      app.me.token = body.token
      this.redirectTo('/repos')
    })

    this.renderPage(MessagePage, {title: 'Logging into GitHub'})
  },

  logout () {
    window.localStorage.clear()
    window.location = '/'
  },

  fourOhFour () {
    this.renderPage(MessagePage, {title: '404', body: 'nothing to see here'})
  }
})
