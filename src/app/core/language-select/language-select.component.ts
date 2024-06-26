import { Component, OnInit } from '@angular/core';
import { defaultLang } from '../../app.constants';

@Component({
  selector: 'cg-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
})
export class LanguageSelectComponent implements OnInit {
  lang!: string;
  constructor() {}

  ngOnInit(): void {
    this.lang = sessionStorage.getItem('lang') || defaultLang;
  }

  changeLanguage(language: string) {
    sessionStorage.setItem('lang', language);
    window.location.reload();
  }
}
