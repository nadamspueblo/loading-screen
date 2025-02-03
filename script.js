const progress = document.getElementById("progress");
const messages = ["Downloading ...", "Loading ...", "Installing ...", "Updating ...", "Configuring ..."];

let amount = 0;
let speed = Math.floor(Math.random() * 10 + 1);

document.getElementById("button").addEventListener("click", cancelClicked);

let id = setInterval(() => {
    progress.style.width = amount + "%";
    if (Math.random() < 0.25)
        amount += speed;
    if (amount >= 100){
        document.getElementById("message").innerHTML = messages[Math.floor(Math.random() * messages.length)];
        progress.style.width = "0px";
        amount = 0;
        speed = Math.floor(Math.random() * 10 + 1);
    }
}, 200);

function cancelClicked(event) {
    clearInterval(id);
    progress.style.width = "95%";
    document.getElementById("message").innerHTML = "Canceling ...";
    document.body.style.cursor = "wait";
    document.getElementById("button").style.cursor = "wait";
}