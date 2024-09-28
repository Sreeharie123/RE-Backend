import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { authRouters } from './routers/auth.routers'

dotenv.config()
const port = process.env.PORT || 3000

const app: Express = express()

app.use(cors({ origin: '*' }))
app.use('/api/auth', authRouters)

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: 200,
    message: 'Server is running successfully!'
  })
})

app.listen(port, () =>
  console.log(`app is listening at http://localhost:${port}`)
)
