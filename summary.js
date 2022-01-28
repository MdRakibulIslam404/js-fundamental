var tableLength = 12;
var tourDestination = ["coxbazar", "nepal", "bhutan", "paris"];
tourDestination.indexOf("bhutan");

var fourth = tourDestination[3];

tourDestination[1] = "Iran";

tourDestination.push("Bangladesh")

tourDestination.pop();

if (tourDestination[1] == "nepal") {
    console.log("pahare jamu");
}
else if (tourDestination[1] == "chaina") {
    console.log("jamu na for corona");
}
else if (tourDestination.length == 4) {
    console.log("aro tk ache aro ghurmu");
}
else {
    console.log("kothaw jamu na");
}

var eggPrice = 32;
var myBudget = 32;
if (eggPrice <= myBudget) {
    // console.log("less than or equal");
}
if (eggPrice >= myBudget) {
    console.log("greater than or equal");
}