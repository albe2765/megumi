var express = require('express'),
    cors = require('cors'),
    secure = require('ssl-express-www');
const PORT = process.env.PORT || 8000

var { color } = require('./megumi/lib/color.js')
var mainrouter = require('./routes/main'),
    apirouter = require('./routes/api')

var app = express()
app.enable('trust proxy');
app.set("json spaces", 2)
app.use(cors())
app.use(secure)
app.use(express.static("./"))

app.use('/', mainrouter) // home
app.use('/api', apirouter) // api

app.listen(PORT, () => {
    console.log(color("Server running on port " + PORT, 'green'))
})

module.exports = app
