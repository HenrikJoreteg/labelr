import Model from 'ampersand-model'

export default Model.extend({
  initialize () {
    const token = window.localStorage.token

    if (token) {
      this.token = token
    }

    this.on('change:token', () => {
      window.localStorage.token = this.token
    })
  },

  props: {
    token: 'string'
  },

  derived: {
    isLoggedIn: {
      deps: ['token'],
      fn () {
        return !!this.token
      }
    }
  }
})
