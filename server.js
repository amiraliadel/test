import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sendRes from './sendRes.js';

const app = express();
//const router = express.Router();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(cookieParser());
app.use(cors({origin: true, credentials: true}));

app.use('/sendRes', sendRes);
app.listen(3001, () => {
    console.log('server is listening at port 3001.');
});