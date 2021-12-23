import {Component, OnDestroy, OnInit} from '@angular/core';
import {DictionaryService} from "../dictionary.service";
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  word: any
  sub: Subscription | undefined

  constructor(private dictionaryService: DictionaryService, private activedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.activedRoute.paramMap.subscribe((paramMap: ParamMap)=>{
      const key = paramMap.get('key');
      const meaning = this.dictionaryService.search(key);
      this.word = {key: key, meaning: meaning};
    })


  };
  ngOnDestroy():void{
    this.sub?.unsubscribe();
  }

}
