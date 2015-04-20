var React = require('react')

var Hello = React.createClass({
  render: function () {
    return <h1>Hello from react</h1>
  }
})

React.render(<Hello/>, document.body)
