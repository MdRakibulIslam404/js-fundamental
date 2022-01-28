var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitPrice = 10;
var packedWell = false;
var myBudget = 100;

if (danishPrice < myBudget) {
    // console.log("danish kheye danish jabo");
}
else if (butterBreadPrice < myBudget) {
    // console.log("butter bon diye cha khamu");
}
else if (toastBiscuitPrice < myBudget) {
    // console.log("toast biscuit khamu");
}
else {
    // console.log("batasha diye cha khamu");
}

if (danishPrice < myBudget) {
    if (packedWell == true) {
        console.log("danish khabo");
    }
    else {
        console.log("danish khamu na!! karon ami khawar agei machi ordhek kheye felche");
    }
}