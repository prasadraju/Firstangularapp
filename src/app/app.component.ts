import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'Hello world';
  name:string="prasad";


  // private route: Router
  // constructor(private router: Router) { 
  //     this.route=router;
  //     this.route.navigateByUrl("/home");
  // }
  ngOnInit() {
    
  }

getval():number{
  return 10;
}

}
