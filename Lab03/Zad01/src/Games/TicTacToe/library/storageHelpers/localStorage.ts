import { IGameSave } from "../gameLogic/IGameSave";

export class LocalStorageStore {
  keyName: string;
  storageInformation: IGameSave[]; //moveHistory
  constructor(keyName) {
    this.keyName = keyName;
  }
  addToStorage(gameState: IGameSave) {
    if (this.storageInformation === undefined) this.storageInformation = [];
    const gameSlotIndex = this.storageInformation.findIndex(
      (slot) => slot.gameID === gameState.gameID
    );
    if (gameSlotIndex < 0) {
      this.storageInformation.push(gameState);
    } else {
      this.storageInformation[gameSlotIndex] = gameState;
    }
    this.saveStore(this.storageInformation);
  }
  getFromStore(): IGameSave[] {
    let storageInformation = <string>localStorage.getItem(this.keyName);
    return <IGameSave[]>JSON.parse(storageInformation);
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
  private saveStore(storageInformation: IGameSave[]) {
    localStorage.setItem(this.keyName, JSON.stringify(storageInformation));
  }
}
