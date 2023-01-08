__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/megumi/views/index.html')
})

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/megumi/views/docs.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/megumi/views/index.html')
})


router.get('/config', (req, res) => {
    config = {
        status: true,
        result: {
            prefix: '/',
            namabot: 'Megumi Bot',
            namaowner: 'Albe Dev',
            instagram: 'Albe Dev',
            youtube: 'Albe2765'
        }
    }
    res.json(config)
})

module.exports = router
