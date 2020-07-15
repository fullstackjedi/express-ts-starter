import { Request, Response } from 'express'

async function sayHello(req: Request, res: Response) {
  res.send('Hello from WAPIC')
}

export { sayHello }
