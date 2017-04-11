"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var USERS = [
    {
        id: 1,
        name: 'Helen Nguyen',
        age: 25,
        email: "example1@gmail.com"
    },
    {
        id: 2,
        name: 'Maria Kovler',
        age: 26,
        email: "example2@gmail.com"
    },
    {
        id: 3,
        name: 'Nurit Cohen',
        age: 27,
        email: "example3@gmail.com"
    },
    {
        id: 4,
        name: 'Kobi Naim',
        age: 29,
        email: "example4@gmail.com"
    }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Angular Tutorial';
        this.user = {
            id: 1,
            name: 'Nguyen Duc Hoang',
            age: 30,
            email: "sunlight4d@gmail.com"
        };
        this.users = USERS;
    }
    AppComponent.prototype.onSelect = function (user1) {
        this.selectedUser = user1;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h1>Hello {{title}}</h1>\n            <h2>This is a list of users</h2>\n            <ul class=\"users\">              \n              <li *ngFor=\"let eachUser of users\" \n              [class.selected]=\"eachUser === selectedUser\" \n              (click)=\"onSelect(eachUser)\">\n              <!--When the expression (hero === selectedHero) is true, Angular adds the selected CSS class-->                \n                <span class=\"badge\">{{eachUser.id}}</span> {{eachUser.name}}\n              </li>\n            </ul>\n            <!--When selectedUser is not NULL, it come to that div-->\n            <div *ngIf=\"selectedUser\"> \n                <h2>You selected: {{selectedUser.name}} with details:</h2>\n                <div><label>User's id: </label>{{selectedUser.id}}</div>\n               <div>\n                    <label>name: </label>\n                    <input [(ngModel)]=\"selectedUser.name\" placeholder=\"Edit your name here\"/>\n                </div>\n            </div>\n",
        styles: ["\n    .selected {\n      background-color: red !important;\n      color: white;\n    }\n    .users {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .users li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 1px;\n    }\n    .users li.selected:hover {\n      background-color: red !important;\n      color: white;\n    }\n    .users li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .users .text {\n      position: relative;\n      top: -3px;\n    }\n    .users .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: green;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 1px 0 0 1px;\n    }"]
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map