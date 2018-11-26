import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: themeSettings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default'
  }

  constructor(@Inject(DOCUMENT) private _document) { 

    this.loadSettings();
  }

  saveSettings(){
    console.log("Datos guardados en el localStorage");
    localStorage.setItem('settings', JSON.stringify(this.settings))
  }

  loadSettings(){
    let localSettings = localStorage.getItem('settings');

    if (localSettings){
      this.settings = JSON.parse(localSettings);
      this.applyTheme(this.settings.theme)
    }else{
      console.log('Usando configuración por defecto');
      this.applyTheme(this.settings.theme)
    }
  }

  applyTheme(theme: string){

    let url = `assets/css/colors/${theme}.css`;

    this._document.getElementById('mainTheme').setAttribute('href', url);

    this.settings.themeUrl = url;
    this.settings.theme = theme;

    this.saveSettings();
  }
}

interface themeSettings {
  themeUrl: string,
  theme: string 
}
