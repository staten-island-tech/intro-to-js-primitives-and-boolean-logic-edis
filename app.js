// // Green Light - Red Light Question

light_color = "green";

if(light_color === "green"){
    console.log("GO")
}else if (light_color === "yellow"){
    console.log("Caution")
}else{
    console.log("STOP")
}

// Coffee Question
kristyIntol = true;
baobaoIntol = false;

if (kristyIntol === false && baobaoIntol === false) {
    console.log("2 Milk")
} else if (kristyIntol === true && baobaoIntol === true) {
    console.log("2 Almond Milk")
}else{
    console.log("One Milk and One Almond Milk")
}



// Temperature Question

// if/else Loop
temp = 75;

if (temp < 68) {
    console.log("Too cold")
}else if (68 <= temp && temp <= 72){
    console.log("Perfect")
}else if (72 <= temp && temp <= 76){
    console.log("Warm")
}else{
    console.log("Hot")
}


// Switch Case Function

function checkTemp(temp) {
    let status = "";
    switch (true) {
        case temp > 76:
            status = "Hot";
            break;
        case temp <= 76:
            status = "Warm";
            break;
        case temp <= 72:
            status = "Perfect";
            break;
        case temp < 68:
            status = "Too Cold";
            break;
        default:
            status = "What's the Weather ?";
            break;
    }
    console.log(status);
}

checkTemp(75);