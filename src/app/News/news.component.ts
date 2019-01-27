import {Component} from "@angular/core"
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector : "news",
    templateUrl : "news.component.html"
})


export class NewsComponent{

article:any="";

constructor(private http:Http){

}

ngOnInit() {
 console.log("ngOnInit called");
 this.getUserData();
}

    // https://api.androidhive.info/contacts/
    // https://conduit.productionready.io/api/profiles/eric

    // { "profile": { "username": "eric", "bio": "Cofounder of Thinkster.io, kinda looks like Peeta from the Hunger Games", 
    // "image": "http://i.imgur.com/S66L2XZ.jpg", 
    // "following": false } } 
    getUserData(){
        // this.http.get("https://conduit.productionready.io/api/profiles/eric").subscribe(
       
       
       
      //  this.http.get("http://localhost:8585/demoapp/api/students/allstudents").subscribe(
       this.http.get("https://newsapi.org/v1//articles?source=entertainment-weekly&sortBy=top&apiKey=df9dd2060b9f4f9ea26d8e3bde47eeb3").subscribe(
        (res)=> {
         var msg:any=res.json();
        //  this.data = JSON.parse(res.json());
        this.article=msg.articles;
          console.log(this.article);
          ;
          
        },
        (err)=>{
        var msg="problem connecting to the server! try again";
        }
        )
    }

    

  }
