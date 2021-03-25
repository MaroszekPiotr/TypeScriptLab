export default class GameBoard{
    sizeX:number;
    sizeY:number;
    constructor(sizeX:number=3,sizeY:number=sizeX){
        this.sizeX=sizeX;
        this.sizeY=sizeY;
    }
    DrawGameBoard():HTMLTableElement{
        const board:HTMLTableElement = document.createElement('table');

        const createGameBoard= () => {
            for (let i =0; i< this.sizeX;i++){
                const row:HTMLElement = document.createElement('tr');
                for (let j = 0; j<this.sizeY;j++){
                    row.appendChild(document.createElement('th'));
                }
                board.appendChild(row);
            }        
        }
        createGameBoard();
        return board;
    }

}