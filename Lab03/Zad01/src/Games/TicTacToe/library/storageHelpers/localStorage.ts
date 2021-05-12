import { Guid } from "../../../../helpers/guid";
import { TicTacToe } from "../../ticTacToe";
import Cell from "../gameLogic/cell";

export class LocalStorageStore {
  keyName: string;
  storageInformation: TicTacToe[]; //moveHistory
  constructor(keyName) {
    this.keyName = keyName;
  }
  addToStorage(gameState: TicTacToe) {
    if (this.storageInformation === undefined) this.storageInformation = [];
    this.getFromStore();
    this.storageInformation.push(gameState);
    this.saveStore(this.storageInformation);
  }
  getFromStore(): Cell[] {
    let storageInformation = <string>localStorage.getItem(this.keyName);
    return <Cell[]>JSON.parse(storageInformation);
  }
  // deleteInStorage(id: Guid) {
  //   this.getFromStore();
  //   if (
  //     this.storageInformation === null ||
  //     this.storageInformation === undefined
  //   )
  //     return;
  //   const updatedStorage = this.storageInformation.filter(
  //     (item) => item.id != id
  //   );
  //   this.saveStore(updatedStorage);
  //   this.getFromStore();
  // }
  private saveStore(storageInformation: TicTacToe[]) {
    localStorage.setItem(this.keyName, JSON.stringify(storageInformation));
  }
}
