import { Component, OnInit,Input } from '@angular/core';
import {OnMount} from 'ng-dynamic';
@Component({
  selector: 'app-gist',
  templateUrl: './gist.component.html',
  styleUrls: ['./gist.component.css']
})
export class GistComponent implements OnInit ,OnMount{
  @Input() gisturl: String;
  dynamicOnMount(attr: Map<string, string>, content: string) {
    this.gisturl = Array.from(attr.values())[0];
    console.log('attr :'+this.gisturl );
    // console.log('cont :'+content)
    console.log(Array.from(attr.keys())[0])
  }
  constructor() { 
  //  this.gisturl="https://gist.github.com/nawnit1996/cbb37d9159d9f699a299a2d733f48abc.js";
  }

  ngOnInit() {
    console.log(this.gisturl)
  }

}
