var ball;
var database;
var position;
function setup(){
    createCanvas(500,500);
    database=firebase.database() //initialising a database
    ball = createSprite(500,550,10,10);
    ball.shapeColor = "red";

    var z=database.ref('ball/position')  //.ref means which value are we referring
    z.on("value",readPosition,showError)   // .on is a listener which keeps on listening the refereed value. If the values are changed, readPosition function is called
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




function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}


function readPosition(data){  //reading from the database
    position=data.val();   //extracting the values from the db and storing it in position variable
    ball.x=position.x;
    ball.y=position.y;    //ball=sprite in the output
}


function showError(){
    console.log("there is an error in the values");
}