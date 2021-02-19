import { cursorTo } from 'node:readline';
import { Board } from './board';
import { Player } from './player';

export class Game {
    private _currentPlayer: Player;
    private _winningPatterns: number[][];
    constructor(
        private _board: Board,
        private _players: Player[]
    ) {
        this._currentPlayer = this._players[0];
        this._winningPatterns = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]
    }
    switchTurns(player: Player) {
        const playerIndex = this._players.indexOf(player);
        if (playerIndex == 0) {
            this._currentPlayer = this._players[1];
        } else {
            this._currentPlayer = this._players[0];
        }
    }
    makeMove(position: number): Board | null {
        if (
            this._board.saveMove(position, this._currentPlayer.token.toString())
        ) {
            this.switchTurns(this._currentPlayer);
            return this._board;
        } else {
            return null;
        }
    }
    // checkWinner(): boolean {
    //     let isWinner: boolean;
    //     this._winningPatterns.forEach(winningCombo => {
    //         const p1: number = winningCombo[1];
    //         const p2: number = winningCombo[2];
    //         const p3: number = winningCombo[3];
    //         if (this._board.board[p1] === this._board.board[p2] && this._board.board[p2] === this._board.board[p3])
    //             isWinner = true;
    //         else 
    //             isWinner = false;
    //     });
    //     return isWinner;
    // }
}