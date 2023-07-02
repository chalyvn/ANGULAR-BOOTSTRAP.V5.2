import {Component} from "@angular/core";
@Component({
  selector: '`app-warning-alert',
  template: `
    <p class="bg-warning">This is a warning, you are in danger!</p>
  `,
 styles: [
   `
     p{
       padding: 20px;
       border: 1px solid red;
     }
   `
 ]
})
export class WarningAlertComponent {

}
