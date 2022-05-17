import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private linkTheme = document.querySelector('#theme');

  constructor() {

    const theme=localStorage.getItem('theme') || "./assets/css/colors/default-dark.css"
    this.linkTheme.setAttribute('href',theme);

  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();

  }
  checkCurrentTheme() {
    const themeActive=document.querySelectorAll('.selector');
     themeActive.forEach((elem) => {
      elem.classList.remove('working');
      const dataTheme = elem.getAttribute('data-theme');
      const dataThemeUrl = `./assets/css/colors/${dataTheme}.css`;
      const checktheme = this.linkTheme.getAttribute('href');

      if (dataThemeUrl===checktheme)
      {
        elem.classList.add('working');
      }

    });
  }
}
