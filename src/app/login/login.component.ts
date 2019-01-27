import {Component} from "@angular/core"
import {Router} from "@angular/router"

@Component({
    selector : "login",
    templateUrl : "login.component.html"
})



export class LoginComponent{

    private route: Router
    constructor(private router: Router) { 
        this.route=router;

    }

    name:string="";
    pwd:string="";
    result:string="";

    submit():void{
       console.log(name) ;
       this.result="Name : "+this.name +"   Pwd : "+this.pwd;

       this.route.navigateByUrl("/dashboard");
    }
}