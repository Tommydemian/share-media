import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import multer from 'multer';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import path from 'path';
import { fileURLToPath } from 'url'
import { register } from './controllers/auth'
import authRoutes from './routes/auth'

const app = express();
// CONFIG AND MIDDLEWARES.

// type modules only:
const __filename = fileURLToPath(import.meta.url) 
const __dirname = path.dirname(__filename)

dotenv.config()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan("common"))
app.use(express.urlencoded({ extended: true, limit: "30mb" }))
app.use(cors())
app.use('assets', express.static(path.join(__dirname, 'public/assets'))) // local storage of assets. 


//  FILE STORAGE CONFIG
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/assets')
    }, 
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

// ROUTE WITH FILES: 
app.post('/auth/register', upload.single, register)

// ROUTES:

app.use('/auth', authRoutes)


// MONGOOSE CONFIG: 
const port = process.env.PORT || 5002

mongoose.connect(process.env.MONGO_URI)
.then(() => app.listen(port, () => console.log(`listening on port: ${port}`)))
.catch((error) => console.error(error + 'did not connect to'))







