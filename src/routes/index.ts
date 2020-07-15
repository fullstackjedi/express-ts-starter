import express from 'express'

// Route Imports
import { getTestRoutes } from './test.routes'

function getRoutes() {
  // create a router for all the routes of our app
  const router = express.Router()
  router.use('/test', getTestRoutes())
  // any additional routes would go here

  return router
}

export { getRoutes }
