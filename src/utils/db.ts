import mongoose from 'mongoose'
import logger from 'loglevel'

const DB_URI = process.env['DB_URI'] || ''

const DB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

function connectDB() {
  mongoose
    .connect(DB_URI, DB_OPTIONS)
    .then(() => {
      logger.info(`DB connected Successfully`)
    })
    .catch((err: Error) => {
      logger.error('DB connection failed')
    })
}

export { connectDB }
