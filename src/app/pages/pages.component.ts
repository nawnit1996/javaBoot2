import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser'
import { PipeTransform, Pipe } from "@angular/core";


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PagesComponent implements OnInit {
articleName : String;
pageContent :String;
  constructor(private route:ActivatedRoute) {   }
  ngOnInit() {
   this.articleName=this.route.snapshot.paramMap.get("articleName");
  this.pageContent="<p style=\"text-align:justify\">&nbsp;</p><hr/><h1 style=\"text-align:justify\"><em><span style=\"font-family:Courier New,Courier,monospace\"><strong><tt>Marker interface</tt></strong></span></em></h1><hr/><h2 style=\"text-align:justify\"><span style=\"font-size:18px\"><cite><span style=\"font-family:Georgia,serif\">Marker interface are interface without any method in it .It is used to specify that a class belongs to a logical family or grouping or we can say that&nbsp;marker interface is just an identity which defines that class can be able to perform certain specified actions. For example if&nbsp; a class implements <span style=\"color:#4e5f70\"><strong>java.lang.Cloneable</strong></span>&nbsp;(A marker interface) then that class can be copied using the <span style=\"color:#2980b9\">clone() </span>method.</span></cite></span></h2><h2 style=\"font-style:italic; text-align:justify\"><strong><tt>Why Marker interface?</tt></strong></h2><h2 style=\"font-style:italic; text-align:justify\"><span style=\"font-size:18px\"><cite><span style=\"font-family:Georgia,serif\">Even though marker interface doesn&#39;t contain any method it plays a vital role.The main purpose is to identify the special objects from normal objects for example if you want to serialize an object then how you will inform to the JVM to serialize the particular object because there may be so many objects available in JVM. In order to know which object is to be serialized marker interfaces are used. When you implement a marker interface the object will be tagged with boolean property with which JVM knows/decides which object should be serialized and which object should not be serialized.</span></cite></span></h2><h2 style=\"font-style:italic; text-align:justify\"><span style=\"font-size:20px\"><tt><strong><span style=\"font-family:Georgia,serif\"><em>Examples</em><em> :</em></span></strong></tt></span></h2><ul><li style=\"text-align:justify\"><span style=\"font-size:18px\"><tt><strong><span style=\"font-family:Georgia,serif\"><em><span style=\"color:#27ae60\">java.lang.Cloneable</span><span style=\"color:#16a085\">&nbsp; </span>:&nbsp; As per java Doc.&nbsp;</em></span></strong></tt></span></li></ul><blockquote><h2 style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"font-family:Georgia,serif\"><cite>A class implements the&nbsp;<code>Cloneable</code>&nbsp;interface to indicate to the&nbsp;<a href=\"https://docs.oracle.com/javase/7/docs/api/java/lang/Object.html#clone()\"><code>Object.clone()</code></a>&nbsp;method that it is legal for that method to make a field-for-field copy of instances of that class.</cite></span></span></h2></blockquote><ul><li style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"color:#27ae60\"><tt><strong><span style=\"font-family:Georgia,serif\"><em>java.lang.Serializable </em></span></strong></tt></span><tt><strong><span style=\"font-family:Georgia,serif\"><em>: As per java Doc.</em></span></strong></tt></span></li></ul><blockquote><h2 style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"font-family:Georgia,serif\"><cite>Serializability of a class is enabled by the class implementing the <code>java.io.Serializable</code> interface. Classes that do not implement this interface will not have any of their state serialized or deserialized. All subtypes of a serializable class are themselves serializable. The serialization interface has no methods or fields and serves only to identify the semantics of being serializable.</cite></span></span></h2></blockquote><ul><li style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"color:#27ae60\"><tt><strong><span style=\"font-family:Georgia,serif\"><em>java.rmi.Remote&nbsp; </em></span></strong></tt></span><tt><strong><span style=\"font-family:Georgia,serif\"><em>: As per java Doc.</em></span></strong></tt></span></li></ul><blockquote><h2 style=\"text-align:justify\"><span style=\"font-size:18px\"><span style=\"font-family:Georgia,serif\"><cite>The&nbsp;<code>Remote</code>&nbsp;interface serves to identify interfaces whose methods may be invoked from a non-local virtual machine. Any object that is a remote object must directly or indirectly implement this interface. Only those methods specified in a &quot;remote interface&quot;, an interface that extends&nbsp;<code>java.rmi.Remote</code>&nbsp;are available remotely.</cite></span></span></h2></blockquote><h2 style=\"font-style:italic; text-align:justify\">&nbsp;</h2><gist  [gisturl]=\"https://gist.github.com/nawnit1996/cbb37d9159d9f699a299a2d733f48abc.js\"></gist>";  
  }
 
 
}


 @Pipe({ name: 'safeHtml'})
  export class SafeHtmlPipe implements PipeTransform  {
    constructor(private sanitized: DomSanitizer) {}
    transform(value) {
      return this.sanitized.bypassSecurityTrustHtml(value);
    }
  }