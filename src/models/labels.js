import Collection from 'ampersand-rest-collection'
import Label from './label'
import githubApiMixin from '../helpers/github-api-mixin'

export default Collection.extend(githubApiMixin, {
  url () {
    return this.parent.url() + '/labels'
  },

  model: Label
})
