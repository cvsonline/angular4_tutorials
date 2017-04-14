"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_service_1 = require("./user.service");
var UserComponent = (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.title = 'Angular Tutorial. This is a list of users';
        this.user = {
            id: 1,
            name: 'Nguyen Duc Hoang',
            age: 30,
            email: "sunlight4d@gmail.com"
        };
    }
    UserComponent.prototype.onSelect = function (myUser) {
        this.selectedUser = myUser;
    };
    UserComponent.prototype.getUsers = function () {
        var _this = this;
        this.userService.getUsers().then(function (users) { return _this.users = users; });
    };
    UserComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    return UserComponent;
}());
UserComponent = __decorate([
    core_1.Component({
        selector: 'my-users',
        template: "<h1>Hello {{title}}</h1>\n            <ul class=\"users\">\n                <li *ngFor=\"let eachUser of users\"\n                 [class.selected]=\"eachUser === selectedUser\"\n                 (click)=\"onSelect(eachUser)\"\n                >\n                    <span class=\"badge\">{{eachUser.id}}</span> {{eachUser.name}}\n                </li>                \n            </ul>\n            <!--When selectedUser is not NULL, it come to that div-->\n            <user-detail [selectedUser]=\"selectedUser\"></user-detail>                      \n",
        styles: ["\n    .selected {\n      background-color: red !important;\n      color: white;\n    }\n    .users {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .users li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 1px;\n    }\n    .users li.selected:hover {\n      background-color: red !important;\n      color: white;\n    }\n    .users li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .users .text {\n      position: relative;\n      top: -3px;\n    }\n    .users .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: green;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 1px 0 0 1px;\n    }"],
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserComponent);
exports.UserComponent = UserComponent;
//# sourceMappingURL=users.component.js.map