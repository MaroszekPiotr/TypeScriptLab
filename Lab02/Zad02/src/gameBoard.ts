export default class GameBoard{
    sizeX:number;
    sizeY:number;
    constructor(sizeX:number=3,sizeY:number=sizeX){
        this.sizeX=sizeX;
        this.sizeY=sizeY;
    }
    DrawGameBoard():HTMLTableElement{
        const board:HTMLTableElement = document.createElement('table');
        return board;
        // const createGameBoard:HTMLTableElement() {
        //     for (let i =0; i< sizeX;i++){
        //         const row = document.createElement('tr');
        //         for (let j = 0; j<sizeY;j++){
        //             row.appendChild(document.createElement('th'));
        //         }
        //         board.appendChild(row);
        //     }
        // }
    }

}