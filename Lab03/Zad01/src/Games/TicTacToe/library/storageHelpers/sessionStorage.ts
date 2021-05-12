import { Guid } from "../../../../helpers/guid";
import Cell from "../gameLogic/cell";

export class SessionStorageStore {
  keyName: string;
  storageInformation: Cell[];
  constructor(keyName) {
    this.keyName = keyName;
  }
  addToStorage(gameState: Cell) {
    if (this.storageInformation === undefined) this.storageInformation = [];
    this.getFromStore();
    this.storageInformation.push(gameState);
    this.saveStore(this.storageInformation);
  }
  getFromStore(): Cell[] {
    let storageInformation = <string>sessionStorage.getItem(this.keyName);
    return <Cell[]>JSON.parse(storageInformation);
  }
  deleteInStorage(id: Guid) {
    this.getFromStore();
    if (
      this.storageInformation === null ||
      this.storageInformation === undefined
    )
      return;
    const updatedStorage = this.storageInformation.filter(
      (item) => item.id != id
    );
    this.saveStore(updatedStorage);
    this.getFromStore();
  }

  deleteStorage() {
    this.storageInformation = [];
    this.saveStore(this.storageInformation);
    this.getFromStore();
  }

  private saveStore(storageInformation: Cell[]) {
    sessionStorage.setItem(this.keyName, JSON.stringify(storageInformation));
  }
}
