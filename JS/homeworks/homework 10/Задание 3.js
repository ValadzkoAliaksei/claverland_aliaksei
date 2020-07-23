"use striсt";
let user = {
    display: "1440x900",
    JavaScript: "Да",
    Flash: "32.0",
    OS: "Windows8",
};
let {display, OS, browser = "Google chrome"} = user;
alert (display);
alert (OS);
alert (browser);