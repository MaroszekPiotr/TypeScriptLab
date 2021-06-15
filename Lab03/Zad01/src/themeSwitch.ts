export class ThemeSwitch {
  actualTheme: number;
  themes: string[];
  destHTMLElement: HTMLElement;
  constructor(destHTMLElement: HTMLElement = document.body) {
    this.themes = [];
    this.actualTheme = 0;
    this.destHTMLElement = destHTMLElement;
  }
  addButton(destBtnElem: HTMLElement, themeNumber?: number): void {
    destBtnElem.addEventListener("click", () => this.changeTheme(themeNumber));
  }
  addTheme(themeName: string): void {
    this.themes.push(themeName);
  }
  addThemes(themesArray: string[]): void {
    this.themes = [...this.themes, ...themesArray];
  }
  init() {
    this.changeTheme(0);
  }
  private nextTheme(): void {
    if (this.actualTheme >= this.themes.length - 1) this.actualTheme = 0;
    else this.actualTheme++;
  }
  private setThemNumber(themeNumber: number) {
    if (themeNumber < 0 || themeNumber >= this.themes.length) return;
    this.actualTheme = themeNumber;
  }
  changeTheme(themeNumber?: number): void {
    if (this.themes.length === 0) return;
    themeNumber != null ? this.setThemNumber(themeNumber) : this.nextTheme();
    this.destHTMLElement.setAttribute(
      "data-theme",
      this.themes[this.actualTheme]
    );
  }
}
