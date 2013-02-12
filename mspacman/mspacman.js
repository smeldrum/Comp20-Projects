function draw(){
	var drawing=document.getElementById('MyCanvas');
	if(drawing.getContext){
		
	var ImageArea=drawing.getContext('2d');
	ActualImage=new Image();
	ActualImage.src="pacman10-hp-sprite.png";
	ImageArea.drawImage(ActualImage, 322, 0, 464, 136, 0, 0, 464, 136);
	ImageArea.drawImage(ActualImage, 2, 80, 18, 18, 0, 0, 18, 18);
	ImageArea.drawImage(ActualImage, 80, 2, 18, 18, 36, 0, 18, 18);
	} else {
		console.log("Canvas is not supported for this browser.");
	}
}