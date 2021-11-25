/*********   CODE CHALLENGE HTML **********/

/*
Aufgabe:
Erstellen Sie eine JS-Struktur, die Ihnen den folgenden String 
einer HTML-Seite ausgibt:
<html><head></head><body><h1></h1><p></p></body></html>
Verwenden Sie dafür die untenstehenden Arrays
*/
//***Theorie****
// push() / pop ()
// push --> daten rein (+)

// let arr = [];
// output(arr);
// arr.push("Ich");
// output(arr);
// arr.push("bin");
// output(arr);
// arr.push("Maxine");
// output(arr);

// pop --> Daten raus

// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);
// output(arr.pop());
// output(arr);

const controls = ["<", "</", ">"];
const tags = ["html", "head", "head", "body", "h1", "h1", "p", "p", "body", "html"];
let stack = [];

output(getHTML());

function getHTML() {

    let htmlStr = "";

    for (let i = 0; i < tags.length; i++) {
        htmlStr += getTags(tags[i]);
        if (isOpenTag(tags[i])) {
            htmlStr += getTags(tags[i], "open");
        } else {
            htmlStr += getTags(tags[i], "close");
        }
    }

    return htmlStr;

}

function isOpenTag(tag) {
    // tag == tag oben auf dem stapel????

    const cond = (tag != stack[stack.lenght - 1]);

    if (cond) {
        stack.push(tag);
        output(stack);
        return true;
    } else {
        stack.pop();
        output(stack);
        return false;
    }
}

// output(getTags("html", "open")); // "open" | "close"

// output(getTags("html", "close"));

// output(getTags("html", "?"));

function getTags(tag, op) {

    switch (op) {

        case "open":

            return controls[0] + tag + controls[2];

        case "close":

            return controls[1] + tag + controls[2];

        default:

            return "#!";

    }

}


// Modul: Ausgabe | Test
//output("hi");
function output(outputData) {
    console.log(outputData);
}