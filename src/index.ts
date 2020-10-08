import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import helmet from 'helmet';
import router from "./routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.disable('x-powered-by');
app.use('/', router);


const PORT = process.env.PORT;

app.listen(PORT || 1337, () => console.log(`main-server listening on port: ${PORT}`));