import express from 'express'
import cors from 'cors'
import usersRouter from './routes/user.js'

const PORT = 3000;
const app = express()

app.use(express.json())
app.use(cors())

app.use('/users', usersRouter)

app.listen(PORT, () => console.log('Server iniciado na porta ' + PORT))