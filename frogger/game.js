// Your work goes here...
NUMLIVES = 3;
GAMEOVER = 0;
LEVELNUMBER = 1;
TIME = 0;
SCORE=0;
HIGHSCORE=0;

VEHICLES = [{"originalPosition":{ "x":171, "y":378}, "currentPosition":{"x":171,"y":378}}];
LOGS = [{"originalPosition":{ "x":215, "y":204}, "currentPosition":{"x":215,"y":204}}];
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



function start_game(){
	var gameboard=document.getElementById('game');
	if(gameboard.getContext){
		initializeBoard(); //will be used if life lost as well
		drawstaticimages(gameboard);
		drawchangingimages(gameboard);
		drawText(gameboard);	
	} else {
		console.log("Canvas is not supported for this browser.");
	}
}

function drawstaticimages(drawing){
	var ImageArea=drawing.getContext('2d');
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

function drawchangingimages(drawing){
	ImageArea=drawing.getContext('2d');
	SpriteSheet= new Image();
	SpriteSheet.src="assets/frogger_sprites.png";
	//will check before this will print whether no lives, and end the game
	ImageArea.drawImage(SpriteSheet, 14, 335, 17, 22, 1, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3, 17, 22); //Life #1
	if(NUMLIVES>=2){
		ImageArea.drawImage(SpriteSheet, 14, 335, 17, 22, 20, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3, 17, 22); //Life #2
	if(NUMLIVES==3){
			ImageArea.drawImage(SpriteSheet, 14, 335, 17, 22, 40, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3, 17, 22); //Life #3
			}
	}
	ImageArea.drawImage(SpriteSheet, 14, 363, 20, 22, FROG['currentPosition']['x'], FROG['currentPosition']['y'], 17, 22); //Drawing the frog
	ImageArea.drawImage(SpriteSheet, 8, 231, 87, 22, LOGS[0]['currentPosition']['x'], LOGS[0]['currentPosition']['y'], 87, 22); //Drawing the logs (only 1 for now)
	ImageArea.drawImage(SpriteSheet, 8, 266, 31, 21, VEHICLES[0]['currentPosition']['x'], VEHICLES[0]['currentPosition']['y'], 31, 21); //Drawing the Vehicles (only 1 for now)
}

function drawText(drawing){
	ImageArea=drawing.getContext('2d');
	ImageArea.font = '20pt Calibri';
    ImageArea.fillStyle = '#7FFF00';
    ImageArea.fillText("LEVEL "+LEVELNUMBER, 60, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3+21);
    ImageArea.font='10pt Calibri';
    ImageArea.fillText("SCORE : "+SCORE, 1, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3+40);
    ImageArea.fillText("HIGHSCHORE : "+HIGHSCORE, 70, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3+40);
}

function initializeBoard(){
	FROG['currentPosition']['x']= FROG['originalPosition']['x'];
	FROG['currentPosition']['y']=FROG['originalPosition']['y'];
	VEHICLES[0]['currentPosition']['x']=VEHICLES[0]['originalPosition']['x'];
	VEHICLES[0]['currentPosition']['y']=VEHICLES[0]['originalPosition']['y'];
	LOGS[0]['currentPosition']['x']=LOGS[0]['originalPosition']['x'];
	LOGS[0]['currentPosition']['y']=LOGS[0]['originalPosition']['y'];
}