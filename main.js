function setup() {
    video = createCapture(VIDEO);
    video.size(260, 260);
    canvas = createCanvas(260, 260);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}

function modelLoaded() {
    console.log("PoseNet load ho gaya hain")
}
noseX = 100
noseY = 100
leftWristX = 0
rightWristX = 0
difference = 20
word= document.getElementById("input").value

function gotPoses(results) {
    if (results.length > 0) {
        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y

        leftWristX = results[0].pose.leftWrist.x
        rightWristX = results[0].pose.rightWrist.x

        difference = floor(leftWristX - rightWristX)
        word= document.getElementById("input").value
    }
}

function draw() {
    background('#6C91C2');
    document.getElementById("font-size").innerHTML =difference + "px";
    textSize(difference);
    fill('#FFFFFF');
    text(word, noseX, noseY);
}