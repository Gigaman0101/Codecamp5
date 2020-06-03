const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('NO user')
})
router.get('/first', (req, res) => {
  res.send('first on user')
})

router.get('/second', (req, res) => {
  res.send('second on user')
})

module.exports = router
