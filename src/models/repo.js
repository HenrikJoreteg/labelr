import Model from 'ampersand-model'

export default Model.extend({

    props: {
        id: 'number',
        name: 'string',
        full_name: 'string',
        description: 'string'
    },

    derived: {
        appUrl: {
            deps: ['full_name'],
            fn () {
                return '/repos/' + this.full_name
            }
        }
    }

})
