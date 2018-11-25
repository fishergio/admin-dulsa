import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  changeColor( themeColor: string, ref: ElementRef){
    
    this.addCheck(ref);

    let url = `assets/css/colors/${themeColor}.css`;

    this._document.getElementById('mainTheme').setAttribute('href', url);
  }

  addCheck(link: any){

    let selectors: any = document.getElementsByClassName('selector');
    
    for(let ref of selectors){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

}
