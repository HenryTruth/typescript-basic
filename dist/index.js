"use strict";
let id = 5;
let company = "Travesy Medis";
let isPublished = true;
let x = "hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
// Tuple
let person = [1, 'Brad', true];
// Tuple Array
let employee;
employee = [
    [1, 'Brad'],
    [2, 'John'],
    [3, 'Jill']
];
// Union
let pid;
pid = '22';
//Enum
var Directon1;
(function (Directon1) {
    Directon1[Directon1["Up"] = 0] = "Up";
    Directon1[Directon1["Down"] = 1] = "Down";
    Directon1[Directon1["Left"] = 2] = "Left";
    Directon1[Directon1["Right"] = 3] = "Right";
})(Directon1 || (Directon1 = {}));
var Directon2;
(function (Directon2) {
    Directon2["Up"] = "Up";
    Directon2["Down"] = "Down";
    Directon2["Left"] = "left";
    Directon2["Right"] = "Right";
})(Directon2 || (Directon2 = {}));
const user = {
    id: 1,
    name: 'john'
};
// Type Assertion
let cid = 1;
// let customer = <number>cid
let customer = cid;
function addNum(x, y) {
    return x + y;
}
const user1 = {
    id: 1,
    name: 'John'
};
