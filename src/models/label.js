import Model from 'ampersand-model'
import githubApiMixin from '../helpers/github-api-mixin'

export default Model.extend(githubApiMixin, {
    idAttribute: 'name',

    props: {
        name: 'string',
        color: 'string'
    }
})