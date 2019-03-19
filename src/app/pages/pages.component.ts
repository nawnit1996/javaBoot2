import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
articleName : String;
pageContent :String;
  constructor(private route:ActivatedRoute) {   }
  ngOnInit() {

    this.articleName=this.route.snapshot.paramMap.get("articleName");
  this.pageContent="<p>Hi this is a html content.Just bare with it</p>";
    console.log('Article Name in Url is : '+this.articleName)
  }

}
