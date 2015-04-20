var getConfig = require('hjs-webpack')

module.exports = getConfig({
  in: 'src/app.js',
  out: 'public',
  html: true,
  isDev: process.env.NODE_ENV !== 'production'
})
