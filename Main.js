"use strict";
exports.__esModule = true;
var Service_1 = require("./service/Service");
var Main = /** @class */ (function () {
    function Main(service) {
        this.projects = [];
        this.service = service;
    }
    Main.prototype.getProjects = function (nameProject) {
        this.service.getData().then(function (data) {
            console.log(data.items);
        })["catch"](function (error) {
            console.log(error);
        });
    };
    return Main;
}());
exports.Main = Main;
var main = new Main(new Service_1.Service());
console.log(main.getProjects("angular"));
