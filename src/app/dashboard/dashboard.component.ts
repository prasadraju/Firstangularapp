import {Component} from "@angular/core"
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector : "dashboard",
    templateUrl : "dashboard.component.html"
})


export class DashboardComponent{

msg:any="";

name:string="Prakash";
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
     
     
     
     this.http.get("http://localhost:8585/demoapp/api/students/allstudents").subscribe(
      (res)=> {
       this.msg=res.json();
      //  this.data = JSON.parse(res.json());
        console.log(this.msg);
      },
      (err)=>{
      var msg="problem connecting to the server! try again";
      }
      )
  }

    postUserData(){
        this.http.post('http://localhost:8585/demoapp/api/students/createStudent', {
            "id": 10,
            "name": this.name,
            "passport_number": "E1234571"
          })
            .subscribe(
              res => {
                console.log(res);
              },
              err => {
                console.log("Error occured");
              }
            );
    }


products:any[]=[
      {
        "id":"p001",
        "name":"lifeboy"
      },{
          "id":"p002",
          "name":"santhoor"
      }
]
    
submit():void{ 
}

}