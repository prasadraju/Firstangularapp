import {Component} from "@angular/core"

@Component({
    selector : "about-us",
    templateUrl : "aboutus.component.html"
})



export class AboutComponent{

    name:string="My name is prasad, i am a software engineer."

    getNo():number{
        return 10+10;
    }
}