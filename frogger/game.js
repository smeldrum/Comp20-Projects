// Your work goes here...
NUMLIVES = 3;
GAMEOVER = 0;
LEVELNUMBER = "LEVEL 1";
TIME = 0;

VEHICLES = {"originalPosition":{ "x":190, "y":482}, "currentPosition":{"x":190,"y":482}};
LOGS = {"originalPosition":{ "x":190, "y":482}, "currentPosition":{"x":190,"y":482}};
SPEEDVEHICLES = 10;
SPEEDLOGS = 10;
FROG = {"originalPosition":{"x":190, "y":482}, "currentPosition":{"x":190,"y":482}};
ORANGEBORDERWIDTH = 1;
ORANGEBORDERHEIGHT = 1;
WATERHEIGHT = 276;
WATERWIDTH = 398;
SPRITESHEETFIRSTGRAYHEIGHT = 12;
SPRITESHEETFROGGERGRAYWIDTH = 15;
HIGHWAYWIDTH = 399;
HIGHWAYHEIGHT = 172;
PURPLERECTWIDTH= 399;
PURPLERECTHEIGHT = 35;


function start_game(){
	var gameboard=document.getElementById('game');
	if(gameboard.getContext){
		drawstaticimages(gameboard);
		drawchangingimages(gameboard);	
	} else {
		console.log("Canvas is not supported for this browser.");
	}
}

function drawstaticimages(drawing){
	var ImageArea=drawing.getContext('2d');
	ImageArea.beginPath();
	ImageArea.rect(ORANGEBORDERWIDTH,ORANGEBORDERHEIGHT,WATERWIDTH,WATERHEIGHT);
	ImageArea.fillStyle = "#191970";
	ImageArea.fill();
	ImageArea.beginPath();
	ImageArea.rect(ORANGEBORDERWIDTH,ORANGEBORDERHEIGHT+WATERHEIGHT+34,HIGHWAYWIDTH, HIGHWAYHEIGHT);
	ImageArea.fillStyle = "#000000";
	ImageArea.fill();
	SpriteSheet= new Image();
	SpriteSheet.src="assets/frogger_sprites.png";
	ImageArea.drawImage(SpriteSheet, 15, 12, 320, 30, 15, 13, 320, 30);
	ImageArea.drawImage(SpriteSheet, 0, 55, 399, 53, 1, 59, 399, 53);
	ImageArea.drawImage(SpriteSheet, 0, 55, 399, 53, 1, 59, 399, 53);
	ImageArea.drawImage(SpriteSheet, 0, 118, 399, 35, 1, WATERHEIGHT, PURPLERECTWIDTH, PURPLERECTHEIGHT);
	ImageArea.drawImage(SpriteSheet, 0, 118, 399, 35, 1, WATERHEIGHT+34+HIGHWAYHEIGHT, PURPLERECTWIDTH, PURPLERECTHEIGHT);
	ImageArea.beginPath();
	ImageArea.rect(ORANGEBORDERWIDTH,ORANGEBORDERHEIGHT+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT-2,HIGHWAYWIDTH, 50);
	ImageArea.fillStyle = "#000000";
	ImageArea.fill();

}

function drawchangingimages(drawing){
	ImageArea=drawing.getContext('2d');
	SpriteSheet= new Image();
	SpriteSheet.src="assets/frogger_sprites.png";
	ImageArea.drawImage(SpriteSheet, 14, 335, 17, 22, 1, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3, 17, 22);
	if(NUMLIVES>=2){
		ImageArea.drawImage(SpriteSheet, 14, 335, 17, 22, 20, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3, 17, 22);
	if(NUMLIVES==3){
			ImageArea.drawImage(SpriteSheet, 14, 335, 17, 22, 40, 1+WATERHEIGHT+PURPLERECTHEIGHT+HIGHWAYHEIGHT+PURPLERECTHEIGHT+3, 17, 22);
			}
	}
	ImageArea.drawImage(SpriteSheet, 14, 356, 17, 22, 1,FROG['originalPosition']['x'], FROG['originalPosition']['y'], 17, 22);
}