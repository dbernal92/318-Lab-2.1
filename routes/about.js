const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('about', {title: 'About Pizza'})
})

module.exports = router