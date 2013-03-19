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
VEHICLESLEFT = [{"originalPosition":{ "x":171, "y":378}, "currentPosition":{"x":171,"y":378}, "sprite":{"startx":9, "starty":268, "x": 30, "y":28}}];
LOGSLEFT = [];
LOGSRIGHT = [];
VEHICLESRIGHT = [{"originalPosition":{ "x":171, "y":378}, "currentPosition":{"x":171,"y":378}}];

function fillArrays(){
	for(var x=0; x<7; x++){
	if(x%2!=0){
		firstLog= {"originalPosition":{ "x":-30, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":0,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":229,"x":88,"y":24}};
		LOGSLEFT[3*x]=firstLog;
		secondLog = {"originalPosition":{ "x":100, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":100,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":194,"x":121,"y":24}};
		LOGSLEFT[3*x+1]=secondLog;
		thirdLog = {"originalPosition":{ "x":250, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":250,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":162,"x":179,"y":24}};
		LOGSLEFT[3*x+2]=thirdLog;
		} else {
		firstLog= {"originalPosition":{ "x":350, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":350,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":229,"x":88,"y":24}};
		LOGSLEFT[3*x]=firstLog;
		secondLog = {"originalPosition":{ "x":10, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":30,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":194,"x":121,"y":24}};
		LOGSLEFT[3*x+1]=secondLog;
		thirdLog = {"originalPosition":{ "x":150, "y":WATERHEIGHT-(x+1)*24-1}, "currentPosition":{"x":150,"y":WATERHEIGHT-(x+1)*24-1}, "sprite":{"startx":8,"starty":162,"x":179,"y":24}};
		LOGSLEFT[3*x+2]=thirdLog;
		}
		
		/*LOGSRIGHT.push({"originalPosition":{ "x":308, "y":WATERHEIGHT+1-23}, "currentPosition":{"x":308,"y":WATERHEIGHT+1-23}, "sprite":{"startx":8,"starty":229,"x":88,"y":23}});
		LOGSRIGHT.push({{"originalPosition":{ "x":110, "y":WATERHEIGHT+1-23}, "currentPosition":{"x":185,"y":WATERHEIGHT+1-23}, "sprite":{"startx":8,"starty":194,"x":121,"y":23}}});
		LOGSRIGHT.push({"originalPosition":{ "x":0, "y":WATERHEIGHT+1-23}, "currentPosition":{"x":0,"y":WATERHEIGHT+1-23}, "sprite":{"startx":8,"starty":162,"x":179,"y":23}});*/
		
	}
}

function start_game(){
	var gameboard=document.getElementById('game');
	if(gameboard.getContext){
		fillArrays();
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
	for(index in VEHICLESLEFT){
	ImageArea.drawImage(SpriteSheet, VEHICLESLEFT[index].sprite.startx, VEHICLESLEFT[index].sprite.starty, VEHICLESLEFT[index].sprite.x, VEHICLESLEFT[index].sprite.y, VEHICLESLEFT[index]['currentPosition']['x'], VEHICLESLEFT[index]['currentPosition']['y'], VEHICLESLEFT[index].sprite.x, VEHICLESLEFT[index].sprite.y);
		}
}

function drawText(drawing){
	ImageArea=drawing.getContext('2d');
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