import express from 'express'
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());

app.use('/user', "Playboy");


app.use('/play', 'JohnySins')



//asdfasdf





