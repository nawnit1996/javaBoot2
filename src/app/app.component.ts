import { Component ,Inject,OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  constructor (@Inject('Window') window: Window) {

  }
showit :Boolean=true;
  ngOnInit() {
    this.startup()
  }

  focusElement(){
    this.showit=false;
  }
  title = 'javaboot2';
  startup():void{
    var observer;
    let observerOptions = {
      root: null,//document.querySelector(".mybody"),
      rootMargin: "0px",
      threshold: [0.9,1]
    };

    observer = new IntersectionObserver(this.handleIntersect, observerOptions);
    observer.observe(document.querySelector("#routerElement"));
  }
  handleIntersect(entries, observer) {
    entries.forEach(function(entry) {
      console.log("Hey it came....: "+entry.intersectionRatio)
      // if (entry.isIntersecting) {
       
        if(entry.intersectionRatio<1){
          console.log("I will show now in nevbar ")
          var element = document.getElementById("navUl");
       element.classList.remove("parent");
        var navLogo=document.getElementById("navLogo").classList.add("navAlign")
        document.getElementById("navLogo").style.display="block";
        var searchIcon=document.getElementById("searchIcon");
        if(searchIcon){
          searchIcon.style.display="block";
        }
          // console.log("after removing classList= "+)
        }else if(entry.intersectionRatio==1){
       console.log("time to hide")
       var element = document.getElementById("navUl");
        element.classList.add("parent");
        document.getElementById("navLogo").classList.remove("navAlign")
        document.getElementById("navLogo").style.display="none";
        var searchIcon=document.getElementById("searchIcon");
        if(searchIcon){
          searchIcon.style.display="none";
        }
        }
      
        // entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
      // } else {
        // entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
      // }
  
      // prevRatio = entry.intersectionRatio;
    });
  }
}
