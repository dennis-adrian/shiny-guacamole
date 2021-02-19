export interface IBoard {

    draw(rows: number, columns: number): void;
    saveMove(position: number, token: string): void;
}