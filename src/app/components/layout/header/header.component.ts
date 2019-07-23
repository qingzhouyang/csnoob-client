import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);

    if (localStorage.getItem('language')) {
      translate.setDefaultLang(localStorage.getItem('language'));
      translate.use(localStorage.getItem('language'));
    }else{ 
      //when no storage data, check browser langugue, 'en' is default lang
      const browserLang = translate.getBrowserLang();
      translate.setDefaultLang('en');
      translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
      localStorage.setItem("language",'en');
    }
  }

  ngOnInit() { }

  langChanged(lang:string){
    localStorage.setItem("language",lang);
    this.translate.use(lang);
  }
}