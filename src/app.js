import styles from './styles/main.styl'
import Router from './router'
import app from 'ampersand-app'
import Me from './models/me'

app.extend({
  init () {
    this.me = new Me()
    this.me.fetch()
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()

window.app = app
