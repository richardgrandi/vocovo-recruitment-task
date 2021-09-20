import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/appliances/ping', (req: Request, res: Response) => {
  return res.json({ message: 'appliances pong' })
})

export default app
