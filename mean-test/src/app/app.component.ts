import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IT6203';
  condition = false;
  users = ['jdow', 'asmith', 'jdoe']; 


json = `[ { "firstName" : "John" , "lastName" : "Dow" }, 
{ "firstName" : "Ann" , "lastName" : "Smith" }, 
{ "firstName" : "Joan" , "lastName" : "Doe" }]`;
students = JSON.parse(this.json);
                    
}
