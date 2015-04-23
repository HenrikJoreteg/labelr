import Model from 'ampersand-model'
import githubApiMixin from '../helpers/github-api-mixin'
import Labels from './labels'

export default Model.extend(githubApiMixin, {
  url () {
    return 'https://api.github.com/repos/' + this.full_name
  },

  props: {
    id: 'number',
    name: 'string',
    full_name: 'string',
    description: 'string'
  },

  collections: {
    labels: Labels
  },

  derived: {
    appUrl: {
      deps: ['full_name'],
      fn () {
        return '/repos/' + this.full_name
      }
    }
  },

  fetch () {
    Model.prototype.fetch.apply(this, arguments)
    this.labels.fetch()
  }
})
