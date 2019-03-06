import { Component, OnInit } from '@angular/core';
// import {DataService} from '../data.service';
import {Observable} from 'rxjs'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
 
posts: any;
news:any;
private url ='https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=909c338e55fe4fd78079baa827a0cb4a';
  // constructor(private data : DataService) { }
  constructor(http:HttpClient) { 
    http.get(this.url)
    .subscribe(Response => {
      console.log('bbbbb', Response);
      this.posts= Response;
      let all = Object.keys(this.posts)
      let newarr = [];
      for( let post of all){
        newarr.push(all[post])
      }
 this.news= newarr
 console.log(this.news)
    });
  }
 

  ngOnInit() {
    this.posts = Response
  //   this.data.getNews().subscribe(
  //     data => {this.posts = data
      
  //   });
  //   console.log('nnnnnn',this.posts)
  }
}

