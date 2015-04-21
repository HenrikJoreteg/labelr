import styles from './styles/main.styl'
import icons from 'octicons/octicons/octicons.css'
import Router from './router'
import app from 'ampersand-app'
import Me from './models/me'

app.extend({
  init () {
    this.me = new Me()
    this.me.fetchAll()
    this.router = new Router()
    this.router.history.start()
  }
})

app.init()

window.app = app
