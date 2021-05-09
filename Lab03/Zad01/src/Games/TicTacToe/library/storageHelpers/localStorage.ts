import { Guid } from "../../../../helpers/guid";
import Cell from "../gameLogic/cell";

export class LocalStorageStore {
  keyName: string;
  storageInformation: Cell[];
  constructor(keyName) {
    this.keyName = keyName;
  }
  AddToStorage(gameState: Cell) {
    if (this.storageInformation === undefined) this.storageInformation = [];
    this.GetFromStore();
    this.storageInformation.push(gameState);
    this.SaveStore(this.storageInformation);
  }
  GetFromStore(): Cell[] {
    let storageInformation = <string>localStorage.getItem(this.keyName);
    return <Cell[]>JSON.parse(storageInformation);
  }
  DeleteInStorage(id: Guid) {
    this.GetFromStore();
    if (
      this.storageInformation === null ||
      this.storageInformation === undefined
    )
      return;
    const updatedStorage = this.storageInformation.filter(
      (item) => item.id != id
    );
    this.SaveStore(updatedStorage);
    this.GetFromStore();
  }
  private SaveStore(storageInformation: Cell[]) {
    localStorage.setItem(this.keyName, JSON.stringify(storageInformation));
  }
}
