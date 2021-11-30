var ball, database;
var position;

function setup(){
    database = firebase.database(); 

    createCanvas(500,500);

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var ballPosition = database.ref("ball/position");
    ballPosition.on("value", readPosition, showError);

}

function draw(){

    background("white");

    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function readPosition(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function showError() {
    console.log("Data not received from the database");
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
