import { v4 as uuidv4 } from 'uuid';
import { Token } from "./token";
export class Player {
    private _id;
    constructor(private _name: string, private _token: Token) {
        this._id = uuidv4();
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    get token() {
        return this._token;
    }
}