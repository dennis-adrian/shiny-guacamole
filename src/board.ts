import { IBoard } from './IBoard';

export class Board implements IBoard {
    private _board: string[] = [];
    constructor(private _rows: number, private _columns: number) {
        this.draw();
    }

    get board() {
        return this._board;
    }

    public draw(): void {
        const boxes: number = this._rows * this._columns;
        for (let index = 0; index < boxes; index++) {
            this._board.push(' ');
        }
    }
    public saveMove(position: number, token: string): boolean {
        if (this._board[position] != 'X' && this._board[position] != 'O') {
            this._board.splice(position, 1, token)
            return true;
        } else {
            return false;
        }
    }
}