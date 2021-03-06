import webpack from 'webpack'
import express from 'express'
import config from './webpack.config.js'

const app = express();
            // DIST_DIR = __dirname,
            // HTML_FILE = path.join(DIST_DIR, 'index.html')
            // compiler = webpack(config)

// app.use(express.static(DIST_DIR))
// app.get('*', (req, res) => {
//     res.sendFile(HTML_FILE)
// })
// import webpackDevMiddleware from 'webpack-dev-middleware'
// app.use(webpackDevMiddleware(compiler, {
//   publicPath: config.output.publicPath
// }))
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}....`)
    console.log('Press Ctrl+C to quit.')
})
app.get('*', async (req, res, next) => {
  const data = await readFileAsync('./server.js', 'utf-8')
  res.json({
    "hello":"world",
    data
  })
})

const fs = require('fs')
const { promisify } = require('util')

const readFileAsync = promisify(fs.readFile)