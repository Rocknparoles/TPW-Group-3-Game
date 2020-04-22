var fileTextTest;
var text;
var size;
var previousSize;

function setup() {
  createCanvas(800, 800);
  colorMode(HSL);
  frameRate(30);
  strokeWeight(0);
  fill (20, 100, 80);
  textFont("Arial");
  textSize(28);
  textAlign(CENTER,CENTER);
  fileTextTest = "baladais,avenue,coeur,bonjour,";
  text[0]="";
  size=0;
  previousSize = 0;
  n=0;
}

function draw() {
  background(55,100,90);
  //load text file
  if(size<fileTextTest.length){
    updateText();
  }
  writeText();
}

function updateText(){
  size = fileTextTest.length;
  for(i=previousSize; i<size; i++){
    if(fileTextTest.charAt(i) != ","){
      text[n]+=fileTextTest.charAt(i);
    }else{
      n++;
      text[n]="";
    }
  }
  previousSize = fileTextTest.length;
}

//quite crappy but it doesn't really matter in that program
function writeText(){
  for(i=0; i<=n; i++){
    text(text[i], 50+10*i, 50+20*i);
  }
  text("cliquer pour allonger \nla liste de mots", 200, 400);
}

//in order to simulate words added to the text file
function mousePressed(){
  fileTextTest+="test,test2,zut,";
}
