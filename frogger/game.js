// Your work goes here...
NUMLIVES = 3;
GAMEOVER = 0;
LEVELNUMBER = 1;
TIME = 0;
SCORE=0;
HIGHSCORE=0;


SPEEDVEHICLES = 10;
SPEEDLOGS = 10;
FROG = {'originalPosition':{'x':190,'y':485},'currentPosition':{'x':190,'y':485}};
ORANGEBORDERWIDTH = 1;
ORANGEBORDERHEIGHT = 1;
WATERHEIGHT = 276;
WATERWIDTH = 398;
HIGHWAYWIDTH = 399;
HIGHWAYHEIGHT = 172;
PURPLERECTWIDTH= 399;
PURPLERECTHEIGHT = 35;
GAMEBOARDWIDTH=399;
VEHICLESLEFT = [];
LOGSLEFT = [];
LOGSRIGHT = [];
VEHICLESRIGHT = [];

function fillArrays(){
	for(var x=0; x<7; x++){
	if(x%2!=0){
		firstLog= {"originalPosition":{ "x":-30, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":-30,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":229,"x":88,"y":24}, "speed":x/2+2};
		LOGSLEFT.push(firstLog);
		secondLog = {"originalPosition":{ "x":100, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":100,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":194,"x":121,"y":24}, "speed":(x/2)+2};
		LOGSLEFT.push(secondLog);
		thirdLog = {"originalPosition":{ "x":250, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":250,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":162,"x":179,"y":24}, "speed":x/2+2};
		LOGSLEFT.push(thirdLog);
		} else {
		firstLog= {"originalPosition":{ "x":350, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":350,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":229,"x":88,"y":24}, "speed":5-(x/3)};
		LOGSRIGHT.push(firstLog);
		secondLog = {"originalPosition":{ "x":0, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":0,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":194,"x":121,"y":24}, "speed":5-(x/3)};
		LOGSRIGHT.push(secondLog);
		thirdLog = {"originalPosition":{ "x":150, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":150,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":162,"x":179,"y":24}, "speed":5-(x/3)};
		LOGSRIGHT.push(thirdLog);
		}
		
	}
	firstVehicle = {"originalPosition":{ "x":171, "y":390}, "currentPosition":{"x":171,"y":390}, "sprite":{"startx":7, "starty":268, "x": 30, "y":28}, "speed":4};
	VEHICLESLEFT.push(firstVehicle);
	secondVehicle = {"originalPosition":{ "x":310, "y":390}, "currentPosition":{"x":310,"y":390}, "sprite":{"startx":7, "starty":268, "x": 30, "y":28}, "speed":4};
	VEHICLESLEFT.push(secondVehicle);
	thirdVehicle = {"originalPosition":{ "x":30, "y":390}, "currentPosition":{"x":30,"y":390}, "sprite":{"startx":7, "starty":268, "x": 30, "y":28}, "speed": 4};
	VEHICLESLEFT.push(thirdVehicle);
	
	firstVehicle = {"originalPosition":{ "x":50, "y":ORANGEBORDERHEIGHT+WATERHEIGHT+34}, "currentPosition":{"x":50, "y":ORANGEBORDERHEIGHT+WATERHEIGHT+34}, "sprite":{"startx":82, "starty":265, "x": 25, "y":25}, "speed": 5};
	VEHICLESLEFT.push(firstVehicle);
	secondVehicle = {"originalPosition":{ "x":100, "y":ORANGEBORDERHEIGHT+WATERHEIGHT+34}, "currentPosition":{"x":200, "y":ORANGEBORDERHEIGHT+WATERHEIGHT+34}, "sprite":{"startx":82, "starty":265, "x": 25, "y":25}, "speed":5};
	VEHICLESLEFT.push(secondVehicle);
	thirdVehicle = {"originalPosition":{ "x":250, "y":ORANGEBORDERHEIGHT+WATERHEIGHT+34}, "currentPosition":{"x":300, "y":ORANGEBORDERHEIGHT+WATERHEIGHT+34}, "sprite":{"startx":82, "starty":265, "x": 25, "y":25}, "speed":5};
	VEHICLESLEFT.push(thirdVehicle);
	
	firstVehicle = {"originalPosition":{ "x":10, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-30}, "currentPosition":{"x":10, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-30}, "sprite":{"startx":104, "starty":302, "x": 49, "y":18}, "speed":6};
	VEHICLESLEFT.push(firstVehicle);
	secondVehicle = {"originalPosition":{ "x":110, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-30}, "currentPosition":{"x":110, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-30}, "sprite":{"startx":104, "starty":302, "x": 49, "y":18}, "speed":6};
	VEHICLESLEFT.push(secondVehicle);
	thirdVehicle = {"originalPosition":{ "x":200, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-30}, "currentPosition":{"x":300, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-30}, "sprite":{"startx":104, "starty":302, "x": 49, "y":18}, "speed":6};
	VEHICLESLEFT.push(thirdVehicle);

	firstVehicle = {"originalPosition":{ "x":30, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-60}, "currentPosition":{"x":30, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-60}, "sprite":{"startx":9, "starty":300, "x": 26, "y":23}, "speed":4};
	VEHICLESRIGHT.push(firstVehicle);
	secondVehicle = {"originalPosition":{ "x":100, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-60}, "currentPosition":{"x":150, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-60}, "sprite":{"startx":9, "starty":300, "x": 26, "y":23}, "speed":4};
	VEHICLESRIGHT.push(secondVehicle);
	thirdVehicle = {"originalPosition":{ "x":310, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-60}, "currentPosition":{"x":310, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-60}, "sprite":{"startx":9, "starty":300, "x": 26, "y":23}, "speed":4};
	VEHICLESRIGHT.push(thirdVehicle);
    
	firstVehicle = {"originalPosition":{ "x":30, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-140}, "currentPosition":{"x":30, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-140}, "sprite":{"startx":46, "starty":264, "x": 29, "y":26}, "speed":7};
	VEHICLESRIGHT.push(firstVehicle);
	secondVehicle = {"originalPosition":{ "x":100, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-140}, "currentPosition":{"x":150, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-140}, "sprite":{"startx":46, "starty":264, "x": 29, "y":26}, "speed":7};
	VEHICLESRIGHT.push(secondVehicle);
	thirdVehicle = {"originalPosition":{ "x":310, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-140}, "currentPosition":{"x":310, "y":WATERHEIGHT+35+HIGHWAYHEIGHT-140}, "sprite":{"startx":46, "starty":264, "x": 29, "y":26}, "speed":7};
	VEHICLESRIGHT.push(thirdVehicle);
}

function start_game(){
	gameboard=document.getElementById('game');
	if(gameboard.getContext){
		fillArrays();
        document.onkeydown = checkUserInput;
		runGameLoop();
        intervalID=setInterval(runGameLoop, 100);
	} else {
		console.log("Canvas is not supported for this browser.");
	}
}

function runGameLoop(){
		updateBoard();
		if(GAMEOVER==1){
            console.log("Game over! Play again!");
            NUMLIVES=3;
            

		}
		drawstaticimages(gameboard);
		drawchangingimages(gameboard);
		drawText(gameboard);
	
}

function checkUserInput(event){
        if(event.keyCode==37){
            FROG.currentPosition.x -= 15;
            if(FROG.currentPosition.x<0){
                FROG.currentPosition.x=0;
            }
        }
        if(window.event.keyCode==39){
            FROG.currentPosition.x += 15;
            if(FROG.currentPosition.x>383){
                FROG.currentPosition.x=383;
            }
        }
        if(window.event.keyCode==38){
            FROG.currentPosition.y -= 15;
        }
        if(window.event.keyCode==40){
            FROG.currentPosition.y += 15;
        }
}

function updateBoard(){
	for(index in LOGSLEFT){
        LOGSLEFT[index]['currentPosition']['x'] = LOGSLEFT[index]['currentPosition']['x'] - LOGSLEFT[index]['speed'];
        if(LOGSLEFT[index]['currentPosition']['x']<=-175){
            LOGSLEFT[index]['currentPosition']['x'] = 400;
        }
    }
    for(index in LOGSRIGHT){
        LOGSRIGHT[index]['currentPosition']['x'] = LOGSRIGHT[index]['currentPosition']['x'] + LOGSRIGHT[index]['speed'];
        if(LOGSRIGHT[index]['currentPosition']['x']>=400){
            LOGSRIGHT[index]['currentPosition']['x'] = -175;
        }
    }
    for(index in VEHICLESRIGHT){
        VEHICLESRIGHT[index]['currentPosition']['x'] = VEHICLESRIGHT[index]['currentPosition']['x'] + VEHICLESRIGHT[index]['speed'];
        if(VEHICLESRIGHT[index]['currentPosition']['x']>=400){
            VEHICLESRIGHT[index]['currentPosition']['x'] = -50;
        }
    }
    for(index in VEHICLESLEFT){
        VEHICLESLEFT[index]['currentPosition']['x'] = VEHICLESLEFT[index]['currentPosition']['x'] - VEHICLESLEFT[index]['speed'];
        if(VEHICLESLEFT[index]['currentPosition']['x']<=-50){
            VEHICLESLEFT[index]['currentPosition']['x']=400;
        }
    }
}

function drawstaticimages(){
	ImageArea=gameboard.getContext('2d');
	ImageArea.beginPath();
	ImageArea.rect(ORANGEBORDERWIDTH,ORANGEBORDERHEIGHT,WATERWIDTH,WATERHEIGHT);
	ImageArea.fillStyle = "#191970";
	ImageArea.fill(); //Water Rectangle
	ImageArea.beginPath();
	ImageArea.rect(ORANGEBORDERWIDTH,ORANGEBORDERHEIGHT+WATERHEIGHT+34,HIGHWAYWIDTH, HIGHWAYHEIGHT);
	ImageArea.fillStyle = "#000000";
	ImageArea.fill(); //Highway rectangle
	SpriteSheet= new Image();
	SpriteSheet.src="assets/frogger_sprites.png";
	ImageArea.drawImage(SpriteSheet, 15, 12, 320, 30, 15, 13, 320, 30); //Frogger Sign
	ImageArea.drawImage(SpriteSheet, 0, 55, GAMEBOARDWIDTH, 53, 1, 59, GAMEBOARDWIDTH, 53); //Green thing
	ImageArea.drawImage(SpriteSheet, 0, 118, GAMEBOARDWIDTH, 35, 1, WATERHEIGHT, PURPLERECTWIDTH, PURPLERECTHEIGHT); //Purple Rectangle 1
	ImageArea.drawImage(SpriteSheet, 0, 118, GAMEBOARDWIDTH, 35, 1, WATERHEIGHT+34+HIGHWAYHEIGHT, PURPLERECTWIDTH, PURPLERECTHEIGHT);  //Purple Rectangle 2
	ImageArea.beginPath();
	ImageArea.rect(ORANGEBORDERWIDTH,ORANGEBORDERHEIGHT+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT-2,HIGHWAYWIDTH, 50);
	ImageArea.fillStyle = "#000000";
	ImageArea.fill(); //Bottom black area

}

function drawchangingimages(){
	SpriteSheet= new Image();
	SpriteSheet.src="assets/frogger_sprites.png";
	ImageArea.drawImage(SpriteSheet, 14, 335, 17, 22, 1, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3, 17, 22); //Life #1
	if(NUMLIVES>=2){
		ImageArea.drawImage(SpriteSheet, 14, 335, 17, 22, 20, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3, 17, 22); //Life #2
	if(NUMLIVES==3){
			ImageArea.drawImage(SpriteSheet, 14, 335, 17, 22, 40, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3, 17, 22); //Life #3
			}
	}
	ImageArea.drawImage(SpriteSheet, 14, 363, 20, 22, FROG['currentPosition']['x'], FROG['currentPosition']['y'], 17, 22); //Drawing the frog
	for(index in LOGSLEFT){
	ImageArea.drawImage(SpriteSheet, LOGSLEFT[index].sprite.startx, LOGSLEFT[index].sprite.starty, LOGSLEFT[index].sprite.x, LOGSLEFT[index].sprite.y, LOGSLEFT[index]['currentPosition']['x'], LOGSLEFT[index]['currentPosition']['y'], LOGSLEFT[index].sprite.x, LOGSLEFT[index].sprite.y); 
	}
    for(index in LOGSRIGHT){
        ImageArea.drawImage(SpriteSheet, LOGSRIGHT[index].sprite.startx, LOGSRIGHT[index].sprite.starty, LOGSRIGHT[index].sprite.x, LOGSRIGHT[index].sprite.y, LOGSRIGHT[index]['currentPosition']['x'], LOGSRIGHT[index]['currentPosition']['y'], LOGSRIGHT[index].sprite.x, LOGSRIGHT[index].sprite.y);
	}
	for(index in VEHICLESLEFT){
	ImageArea.drawImage(SpriteSheet, VEHICLESLEFT[index].sprite.startx, VEHICLESLEFT[index].sprite.starty, VEHICLESLEFT[index].sprite.x, VEHICLESLEFT[index].sprite.y, VEHICLESLEFT[index]['currentPosition']['x'], VEHICLESLEFT[index]['currentPosition']['y'], VEHICLESLEFT[index].sprite.x, VEHICLESLEFT[index].sprite.y);
		}
    for(index in VEHICLESRIGHT){
        ImageArea.drawImage(SpriteSheet, VEHICLESRIGHT[index].sprite.startx, VEHICLESRIGHT[index].sprite.starty, VEHICLESRIGHT[index].sprite.x, VEHICLESRIGHT[index].sprite.y, VEHICLESRIGHT[index]['currentPosition']['x'], VEHICLESRIGHT[index]['currentPosition']['y'], VEHICLESRIGHT[index].sprite.x, VEHICLESRIGHT[index].sprite.y);
    }
}

function drawText(drawing){
	ImageArea.font = '20pt Calibri';
    ImageArea.fillStyle = '#7FFF00';
    ImageArea.fillText("LEVEL "+LEVELNUMBER, 60, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3+21);
    ImageArea.font='10pt Calibri';
    ImageArea.fillText("SCORE : "+SCORE, 1, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3+40);
    ImageArea.fillText("HIGHSCORE : "+HIGHSCORE, 70, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3+40);
}

function initializeBoard(){
	FROG['currentPosition']['x']= FROG['originalPosition']['x'];
	FROG['currentPosition']['y']=FROG['originalPosition']['y'];
	for(index in VEHICLESLEFT){
		VEHICLESLEFT[index]['currentPosition']['x']=VEHICLESLEFT[index]['originalPosition']['x'];
		VEHICLESLEFT[index]['currentPosition']['y']=VEHICLESLEFT[index]['originalPosition']['y'];
	}
	for(index in LOGSLEFT){
	LOGSLEFT[index]['currentPosition']['x']=LOGSLEFT[index]['originalPosition']['x'];
	LOGSLEFT[index]['currentPosition']['y']=LOGSLEFT[index]['originalPosition']['y'];
	}
}