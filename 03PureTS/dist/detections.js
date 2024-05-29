"use strict";
const detectType = (val) => {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 5;
};
const provideId = (_id) => {
    if (!_id) {
        console.log("Please provide the id.");
        return;
    }
    return _id.toLowerCase();
};
// Dont do this
const printAll = (strs) => {
    if (strs) {
        if (typeof strs === "string") {
            return strs.toLowerCase();
        }
        else if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
            return;
        }
    }
};
function isAdminAccount(acc) {
    if ("isAdmin" in acc) {
        return acc.isAdmin;
    }
    return false;
}
function logValue(val) {
    if (val instanceof Date) {
        console.log(val.toUTCString());
        return;
    }
    console.log(val.toLowerCase());
    return;
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function isBird(pet) {
    return pet.fly !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        console.log("Fish Food!");
        return;
    }
    console.log("Bird Food!");
    return;
}
function getShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.side * shape.side;
    }
    return shape.length * shape.breadth;
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side ** 2;
        case "rectangle":
            return shape.length * shape.breadth;
        default:
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}
