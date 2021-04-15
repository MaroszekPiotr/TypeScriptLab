export class ThemeSwitch {
  actualTheme: number;
  themes: string[];
  destHTMLElement: HTMLElement;
  constructor(destHTMLElement: HTMLElement = document.body) {
    this.themes = [];
    this.actualTheme = 0;
    this.destHTMLElement = destHTMLElement;
  }
  AddButton(destBtnElem: HTMLElement, themeNumber?: number): void {
    destBtnElem.addEventListener("click", () => this.ChangeTheme(themeNumber));
  }
  AddTheme(themeName: string): void {
    this.themes.push(themeName);
  }
  AddThemes(themesArray: string[]): void {
    this.themes = [...this.themes, ...themesArray];
  }
  private NextTheme(): void {
    if (this.actualTheme >= this.themes.length - 1) this.actualTheme = 0;
    else this.actualTheme++;
  }
  private SetThemNumber(themeNumber: number) {
    if (themeNumber < 0 || themeNumber >= this.themes.length) return;
    this.actualTheme = themeNumber;
  }
  private ChangeTheme(themeNumber?: number): void {
    if (this.themes.length === 0) return;
    themeNumber != null ? this.SetThemNumber(themeNumber) : this.NextTheme();
    this.destHTMLElement.setAttribute(
      "data-theme",
      this.themes[this.actualTheme]
    );
  }
}
