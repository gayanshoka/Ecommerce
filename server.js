import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js';
import categoryRoutes from './routes/categoryRoute.js';
import productRoutes from './routes/productRoute.js';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
//config.env
dotenv.config();

//esmoduel fix

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//database config
connectDB();



//rest object

const app = express();

//middleware 
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './client/build')))

// routes
app.use("/api/v2/auth", authRoutes);
app.use("/api/v2/category", categoryRoutes);
app.use("/api/v2/product", productRoutes);

//rest api
app.use('*',function(req,res){
    res.sendFile(path(__dirname, './client/build/index.html'))
})
app.get("/", (req ,res) =>{
    res.send ('<h1>Well Come app </h1>');
});

//PORT
const PORT = process.env.PORT || 8080;


//run listen
app.listen(PORT, () =>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode  on port ${PORT}`.bgCyan.white)
});
