import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(public settingsSrv: SettingsService) { }

  ngOnInit() {
    this.setCheck();
  }

  changeColor( themeColor: string, ref: ElementRef){
    
    this.settingsSrv.applyTheme(themeColor);
    this.addCheck(ref);

  }

  addCheck(link: any){

    let selectors: any = document.getElementsByClassName('selector');
    
    for(let ref of selectors){
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }

  setCheck(){
    let selectors: any = document.getElementsByClassName('selector');

    let theme = this.settingsSrv.settings.theme;

    for (let ref of selectors) {
      if (ref.getAttribute('data-theme') == theme){
        ref.classList.add('working');
        break;
      }
    }
  }
}
