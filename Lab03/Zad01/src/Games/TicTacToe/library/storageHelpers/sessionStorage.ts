import { Guid } from "../../../../helpers/guid";
import Cell from "../gameLogic/cell";
import { IGameState } from "../gameLogic/IGameState";

export class SessionStorageStore {
  keyName: string;
  storageInformation: IGameState;
  constructor(keyName) {
    this.keyName = keyName;
  }
  addToStorage(gameState: IGameState) {
    if (this.storageInformation === undefined) this.storageInformation = null;
    this.getFromStore();
    this.storageInformation = gameState;
    this.saveStore(this.storageInformation);
  }
  getFromStore(): IGameState {
    let storageInformation = <string>sessionStorage.getItem(this.keyName);
    return <IGameState>JSON.parse(storageInformation);
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

  deleteStorage() {
    this.storageInformation = null;
    this.saveStore(this.storageInformation);
    this.getFromStore();
  }

  private saveStore(storageInformation: IGameState) {
    sessionStorage.setItem(this.keyName, JSON.stringify(storageInformation));
  }
}
