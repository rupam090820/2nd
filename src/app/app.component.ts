import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first';
  public first_name: string="rupam"
  public last_name:string ="saha";
  public age:Number =22;
  public bool:boolean=false;
 
  myClick(){
console.log("this is done");
console.log(this.first_name)
  }

  gfg(event:any) {
        console.log(event.target.value);
      }   

    buttonFunction(phone:any)
    {
      console.log(phone);
    }
}

