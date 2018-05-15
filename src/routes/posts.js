import express from 'express'
const router = express.Router()

router.get('/', function(req, res, next) { // eslint-disable-line no-unused-vars
  res.send('post')
})

export default router
