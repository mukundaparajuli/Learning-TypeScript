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
