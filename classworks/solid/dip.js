"use strict";
// const fs = require('node:fs');
Object.defineProperty(exports, "__esModule", { value: true });
// function write(path, data) {
//   fs.writeFileSync(path, data);
// }
// function read(path) {
//   return fs.readFileSync(path);
// }
// write('file.txt', 'hello world');
// const data = read('file.txt');
// console.log(data.toString());
var fs = require("fs");
var FileOperations = /** @class */ (function () {
    function FileOperations() {
    }
    FileOperations.prototype.write = function (path, data) { };
    FileOperations.prototype.read = function (path) {
        return '';
    };
    return FileOperations;
}());
var JSONOperations = /** @class */ (function () {
    function JSONOperations() {
    }
    JSONOperations.prototype.write = function (path, data) {
        fs.writeFileSync(path, JSON.stringify(data));
    };
    JSONOperations.prototype.read = function (path) {
        return '';
    };
    return JSONOperations;
}());
var obj = new JSONOperations();
obj.write('file.json', { jsonData: { name: 'James', age: 123 } });
