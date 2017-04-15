import { Component } from '@angular/core';
//.ts = Typescript
//Typescript => generate to javascript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//export = "public"
export class AppComponent {
  title = 'This is my angular tutorial!';
  author = "Nguyen Duc Hoang";
}
