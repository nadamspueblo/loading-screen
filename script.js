const progress = document.getElementById("progress");
console.log(progress);
let amount = 0;

setInterval(() => {
    progress.style.width = amount + "%";
    if (Math.random() < 0.25)
        amount += 1;
    if (amount >= 100){
        document.getElementById("message").innerHTML = "Installing ...";
        progress.style.width = "0px";
        amount = 0;
    }
}, 200);