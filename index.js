import express from 'express';
import bodyParser from 'body-parser';

import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Routes from './server/route.js';

const app = express(); 
dotenv.config();
app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/users', Routes);


const URL = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.jei8n.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

const PORT = process.env.PORT || '8080'; 


mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 

    app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))
}).catch((error) => {
    console.log('Error:', error.message)
})

;
