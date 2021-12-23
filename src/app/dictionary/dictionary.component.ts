import { Component, OnInit } from '@angular/core';
import {DictionaryService} from "../dictionary.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
word: any;
listWord:any  = []

  constructor(private dictionaryService: DictionaryService) {

  }

  search(word: string){
    const meaning = this.dictionaryService.search(word);
    this.word = {
      key: word,
      meaning: meaning
    };
  }

  ngOnInit(): void {
    this.listWord = this.dictionaryService.getAll();
  }

}
