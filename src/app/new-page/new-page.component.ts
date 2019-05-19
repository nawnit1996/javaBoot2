import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormDetail } from "./FormDetail";
import { DomSanitizer } from '@angular/platform-browser';
import { PipeTransform, Pipe } from "@angular/core";
import { AddEditPageService } from "./../add-edit-page.service"
import { PagesService } from "./../pages.service";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {
  tagSearchTerm: FormControl = new FormControl();
  formData: FormDetail;
  public formDataModificationInd: boolean;
  saveStatus: Boolean;
  triedSaving: number;
  public Editor = ClassicEditor;
  

  tagList = ['Java', 'Spring-Boot', 'Angular', 'AngularJS', 'Oracle','Html','CSS']
  // tag: String;
  editorContent: String;
  @Input() pageurl: String;
  constructor(private pageService: PagesService, private addEditService: AddEditPageService) {
    this.editorContent = "<p style=\"text-align:justify\">&nbsp;</p><hr/><h1 style=\"text-align:justify\"><em><span style=\"font-family:Courier New,Courier,monospace\"><strong><tt>Marker interface</tt></strong></span></em></h1><hr/><h2 style=\"text-align:justify\"><span style=\"font-size:18px\"><cite><span style=\"font-family:Georgia,serif\">Marker interface are interface without any method in it .It is used to specify that a class belongs to a logical family or grouping or we can say that&nbsp;marker interface is just an identity which defines that class can be able to perform certain specified actions. For example if&nbsp; a class implements <span style=\"color:#4e5f70\"><strong>java.lang.Cloneable</strong></span>&nbsp;(A marker interface) then that class can be copied using the <span style=\"color:#2980b9\">clone() </span>method.</span></cite></span></h2><h2 style=\"font-style:italic; text-align:justify\"><strong><tt>Why Marker interface?</tt></strong></h2><h2 style=\"font-style:italic; text-align:justify\"><span style=\"font-size:18px\"><cite><span style=\"font-family:Georgia,serif\">Even though marker interface doesn&#39;t contain any method it plays a vital role.The main purpose is to identify the special objects from normal objects for example if you want to serialize an object then how you will inform to the JVM to serialize the particular object because there may be so many objects available in JVM. In order to know which object is to be serialized marker interfaces are used. When you implement a marker interface the object will be tagged with boolean property with which JVM knows/decides which object should be serialized and which object should not be serialized.</span></cite></span></h2><h2 style=\"font-style:italic; text-align:justify\"><span style=\"font-size:20px\"><tt><strong><span style=\"font-family:Georgia,serif\"><em>Examples</em><em> :</em></span></strong></tt></span></h2><ul><li style=\"text-align:justify\"><span style=\"font-size:18px\"><tt><strong><span style=\"font-family:Georgia,serif\"><em><span style=\"color:#27ae60\">java.lang.Cloneable</span><span style=\"color:#16a085\">&nbsp; </span>:&nbsp; As per java Doc.&nbsp;</em></span></strong></tt></span></li></ul><blockquote><h2 style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"font-family:Georgia,serif\"><cite>A class implements the&nbsp;<code>Cloneable</code>&nbsp;interface to indicate to the&nbsp;<a href=\"https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#clone()\"><code>Object.clone()</code></a>&nbsp;method that it is legal for that method to make a field-for-field copy of instances of that class.</cite></span></span></h2></blockquote><ul><li style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"color:#27ae60\"><tt><strong><span style=\"font-family:Georgia,serif\"><em>java.lang.Serializable </em></span></strong></tt></span><tt><strong><span style=\"font-family:Georgia,serif\"><em>: As per java Doc.</em></span></strong></tt></span></li></ul><blockquote><h2 style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"font-family:Georgia,serif\"><cite>Serializability of a class is enabled by the class implementing the <code>java.io.Serializable</code> interface. Classes that do not implement this interface will not have any of their state serialized or deserialized. All subtypes of a serializable class are themselves serializable. The serialization interface has no methods or fields and serves only to identify the semantics of being serializable.</cite></span></span></h2></blockquote><ul><li style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"color:#27ae60\"><tt><strong><span style=\"font-family:Georgia,serif\"><em>java.rmi.Remote&nbsp; </em></span></strong></tt></span><tt><strong><span style=\"font-family:Georgia,serif\"><em>: As per java Doc.</em></span></strong></tt></span></li></ul><blockquote><h2 style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"font-family:Georgia,serif\"><cite>The&nbsp;<code>Remote</code>&nbsp;interface serves to identify interfaces whose methods may be invoked from a non-local virtual machine. Any object that is a remote object must directly or indirectly implement this interface. Only those methods specified in a &quot;remote interface&quot;, an interface that extends&nbsp;<code>java.rmi.Remote</code>&nbsp;are available remotely.</cite></span></span></h2></blockquote><h2 style=\"font-style:italic; text-align:justify\">&nbsp;</h2><gist  [gisturl]=\"https://gist.github.com/nawnit1996/cbb37d9159d9f699a299a2d733f48abc.js\"></gist>";
  }



  ngOnInit() {
    // this.Editor.config.allowedContent = true;
    console.log("pageUrl is : "+this.pageurl)
    if (!this.pageurl) {
      this.formData = new FormDetail();
      this.formData.htmlContent=this.editorContent;
    } else {
      this.addEditService.getArticleDetail(this.pageurl).subscribe(article => this.formData = article);
    }
  

  }

  public editExisting(pageUrl: String) :void{
    this.addEditService.getArticleDetail(pageUrl).subscribe(article => {this.formData = article
    console.log("==>"+this.formData.htmlContent)
    });
  }

  public options: Object = {
    placeholder: "Edit Me",
    angularIgnoreAttrs: ['class', 'myatt']
,
      htmlAllowedTags: ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6','div','br','li','ul','gist','h1','h2','h3','h4','code','script','ol','em','strong','span','i','u','a','blockquote','hr'],

    // find all event here :https://www.froala.com/wysiwyg-editor/docs/events?_ga=2.179015394.716117874.1554913662-668680116.1554401384#blur
      events : {
        'froalaEditor.focus' : function(e, editor) {
          console.log("hi i am focused");
        },

        'froalaEditor.commands.after' : function(e, editor, cmd, param1, param2){
    console.log("Oh making full screen")
        },
        'froalaEditor.image.inserted' :function (e, editor, $img, response) {
        console.log("imaaage inserted...")
        }

      }
  }
  saveArticle(): void {
    this.triedSaving = 1;
    this.addEditService.saveArticle(this.formData).subscribe(status =>{ this.saveStatus = status;
      if (this.saveStatus) {
        this.triedSaving = 2;
        this.formDataModificationInd=false;
      } else {
        this.triedSaving = 3;
      }
    
    });
    
  }
  
  addTag(tagName) {
    this.formData.tags.push(tagName);
    console.log(this.formData)
  }

  tagAdded(tag: String): void {
    this.formData.tags.push(tag);
    this.formDataModificationInd = true;
  }

}
@Pipe({ name: 'safeHtml' })
export class SafeHtmlPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) { }
  transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }
}