export class FormDetail {
    constructor() {

     }
     articleId :String;
    shortDescription: String;
    articleName: String;
    htmlContent: String;
    tags: String[]=[];
    url: String;
    publishStatus: String;
    contributor: String;
    likes: number;
    comments: number;
    noOfTimesVisited: number;
    publishedDate: Date;
    imageUrl: String;
}
