import express from 'express'
import { sayHello } from '../controllers'

// A function to get the routes.
// That way all the route definitions are in one place which I like.
// This is the only thing that's exported
function getTestRoutes() {
  const router = express.Router()
  router.get('/hello', sayHello)

  return router
}

export { getTestRoutes }
