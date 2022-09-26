function setup(){
    canvas = createCanvas(550, 550);
    canvas.position(650, 200);

    video = createCapture(VIDEO);
    video.size(550, 550);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function draw(){
    background("grey");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}