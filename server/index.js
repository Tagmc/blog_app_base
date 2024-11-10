import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import posts from './routers/posts.js';
import mongoose from 'mongoose';

const app = express();
const PORT = process.env.port || 5000;

const URI = 'mongodb+srv://huyqthp03:huydaik123@cluster0.a9w5cgk.mongodb.net/BlogProject?retryWrites=true&w=majority&appName=Cluster0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' })); // limit the amount of space the client can submit to the server
app.use(cors());

app.use('/posts', posts);

mongoose
    .connect(URI)
    .then(() => {
        console.log('Connected to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }).catch(err => {
        console.log('err', err);
    });

