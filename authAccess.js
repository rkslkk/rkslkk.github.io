var pass = " ";

while (s != "kneltspurtrupee") {
    s = prompt("please enter password: ");

    if (s == "kneltspurtrupee") {
        window.location.href = "index.html";
    }
    else {
        alert("Incorrect");
    }
}