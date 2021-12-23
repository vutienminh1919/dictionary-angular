import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private words: any = [
    {
      key: 'rice', meaning: 'gao'
    },
    {
      key: 'apple', meaning: 'tao'
    },
    {
      key: 'orange', meaning: 'cam'
    },
    {
      key: 'rain', meaning: 'mua'
    },
    {
      key: 'candy', meaning: 'keo'
    }
  ];

  search(word: string | null) {
    if (!word) {
      return "";
    }
    const w = this.words.find((item: { key: string; }) => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    } else {
      return 'Not found'
    }
  }
  getAll(){
    return this.words;
  }

  constructor() {
  }


}
