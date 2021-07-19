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
noseX=180
noseY=180
leftWristX=0
rightWristX=0
difference=50

function gotPoses(results) {
    if(results.length > 0) {
noseX=results[0].pose.nose.x
noseY=results[0].pose.nose.y

leftWristX=results[0].pose.leftWrist.x
rightWristX=results[0].pose.rightWrist.x

difference= floor(leftWristX-rightWristX)
}}

/*function draw(){
    stroke(0, 102, 153)
    fill(0, 102, 153);
    textSize(difference);
    text('word', noseX, noseY);
}*/