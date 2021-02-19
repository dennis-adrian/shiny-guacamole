import { Board } from './src/board';
import { Game } from './src/game';
import { Player } from './src/player';
import { Token } from './src/token';
class Main {
    static main() {
        const myBoard = new Board(3, 3);
        const player1 = new Player('dennis', Token.O);
        const player2 = new Player('dennis', Token.X);
        const myGame = new Game(myBoard, [player1, player2]);

    }
}

Main.main();