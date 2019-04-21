import { Component, OnInit, ViewChild } from '@angular/core';
import { FormDetail } from "./../new-page/FormDetail";
import { AddEditPageService } from '../add-edit-page.service';
import { NewPageComponent } from '../new-page/new-page.component';
@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  @ViewChild(NewPageComponent) childComponent;

  articleList :FormDetail[];
  activeTab : boolean;
  editUrl : String;
  constructor(private adminPageService : AddEditPageService) {
   
   }

  ngOnInit() {
    this.articleList=[];
    this.activeTab=true;
    this.fetchArticles();
  }
fetchArticles():void{
    this.adminPageService.getArticlesForEdit().subscribe(articleList=>this.articleList=articleList)
console.log("inside fetchArticles method"+this.articleList)
}

editArticle(url : String) : void{
  this.activeTab=false;
  this.editUrl=url;
 this.childComponent.editExisting(url);
}

addNewArticle():void{
  this.activeTab=false;
  this.editUrl=null;
}
viewArticle(){
  if(this.childComponent.formDataModificationInd){
   var confirmed= confirm("There are undaved changes!!Still wanna continue?")
   if(confirmed){
    this.activeTab=true;
   }
  }else{
    this.activeTab=true;
    this.editUrl=null;
  }
}
deleteArticle(articleUrl: String) : void{
  this.adminPageService.delteArticle(articleUrl).subscribe(status=>{

    if(status){
      this.fetchArticles();
    }else{
      alert("Delete failed.")
    }
  })
};

}
