var getJob = false;
var moneySaved = 250000;
var hasFlat = false;
var hasHouse = true;
//////////
if (getJob == true && moneySaved > 200000) {
    // console.log("cholo biya kore feli");
}
else {
    // console.log("tor kopale biya nai");
}

////////////
if (getJob == true && moneySaved > 200000 && hasFlat == true) {
    // console.log("cholo biya kore feli");
}
else {
    // console.log("tor kopale biya nai");
}

/////////
if (getJob == true || moneySaved > 200000) {
    // console.log("cholo biya kore feli");
}
else {
    // console.log("tor kopale biya nai");
}

///////////
if ((getJob == true && moneySaved > 200000) || (hasHouse == true)) {
    console.log("cholo biya kore feli");
}
else {
    console.log("tor kopale biya nai");
}