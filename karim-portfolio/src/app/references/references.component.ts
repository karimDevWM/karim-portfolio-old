import { Component, OnInit } from '@angular/core';
import { TranslationLoaderService } from '../service/translation-loader.service';
import { TranslateService } from '@ngx-translate/core';
import { locale as english } from '../shared/i18n/en';
import { locale as french } from '../shared/i18n/fr';
import { referencesEn} from '../api/referencesEn';
import { referencesFr} from '../api/referencesFr';

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent implements OnInit {
  references:any=referencesEn;
  constructor(private _translationLoaderService: TranslationLoaderService,private _translateService: TranslateService) {
    this._translationLoaderService.loadTranslations(english, french);
    this._translateService.onLangChange.subscribe(()=>{
      if(this._translateService.currentLang=="en"){
        this.references=referencesEn;
      }
      else{
        this.references=referencesFr;
      }
    });
  }

  ngOnInit(): void {
  }

}