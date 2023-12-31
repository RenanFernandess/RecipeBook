import express, { Request, Response } from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.SERVER_PORT

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
