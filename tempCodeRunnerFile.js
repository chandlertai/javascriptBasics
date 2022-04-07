
let color = "blue";

function skyColor() {
    color = "pink";
    if (true) {
        var color = "purple";
        console.log(color);
    }
    console.log(color);
}

skyColor();
console.log(color);