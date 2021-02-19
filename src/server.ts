import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

export default class Server {
    private _app: express.Application;
    constructor() {
        this._app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this._app.set('port', process.env.PORT || 3000);
    }

    routes() {
        this._app.get('/', (req, res) => res.send('Hello World!'));
        //middlewares
        this._app.use(morgan('dev'));
        this._app.use(express.json());
        this._app.use(express.urlencoded({ extended: false }))
        this._app.use(cors);
    }

    start(): void {
        this._app.listen(this._app.get('port'), (): void => console.log('Server on port', this._app.get('port')))
    }
}