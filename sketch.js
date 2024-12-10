//visualization of the average album color of the top 40 albums on spotify, by year, since 2000
// top album = highest amount of streams on spotify for an album released in that year, data taken in november 2024

function setup() {
 let canvas = createCanvas(windowWidth, windowHeight-50)
 canvas.style('z-index','-1')
  showColors()
}
let currentSort = "all"
let showGenreSort = 0
let showLocationSort = 0
let wrapWords = 1000
let textYOffset = -10
let textXOffset = 10

function draw() {
  background(255);
seeAllButton()
showColors()  
    
//SORT BY GENRE

  //button range arrays = [xMin, xMax, yMin, yMax]
  let genreButtonRange = [(windowWidth/2)-250,((windowWidth/2)-250)+180,20,120]
  fill(255,0,0)
  rect((windowWidth/2)-250,20,180,100,40)
  fill(0)
  textSize(22)
  textAlign(LEFT)
  text("sort by genre",(windowWidth/2)-230,75)
  if(mouseX>genreButtonRange[0]&&mouseX<genreButtonRange[1]&&mouseY>genreButtonRange[2]&&mouseY<genreButtonRange[3]){
    showGenreSort = 1
  }
if (showGenreSort == 1){
  showLocationSort = 0 
  genreButtons()
  function genreButtons(){
    let genreList = ["pop","rock","hip-hop","r&b"]
     for(x=0;x<4;x++){
      fill(255,0,0)
      rect(x*(windowWidth/7-50)+50,160,150,80,40)
      fill(0)
      textSize(23)
      textAlign(CENTER)
      text(genreList[x],x*(windowWidth/7-50)+75,190,100)
    }   
  }
  
  clickGenreButtons()
  function clickGenreButtons(){
  //click on pop button
  let popButtonRange = [0*(windowWidth/7-50)+50,0*(windowWidth/7-50)+50+160,160,160+80]
if(mouseX>popButtonRange[0]&&mouseX<popButtonRange[1]&&mouseY>popButtonRange[2]&&mouseY<popButtonRange[3] && mouseIsPressed){
    currentSort = "Pop"}
  if (currentSort == "Pop"){
        showColors() }
  //click on rock button
  let rockButtonRange = [1*(windowWidth/7-50)+50,1*(windowWidth/7-50)+50+160,160,160+80]
if(mouseX>rockButtonRange[0]&&mouseX<rockButtonRange[1]&&mouseY>rockButtonRange[2]&&mouseY<rockButtonRange[3] && mouseIsPressed){
    currentSort = "Rock"}
  if (currentSort == "Rock"){
        showColors() }
  
let hiphopButtonRange = [2*(windowWidth/7-50)+50,2*(windowWidth/7-50)+50+160,160,160+80]
if(mouseX>hiphopButtonRange[0]&&mouseX<hiphopButtonRange[1]&&mouseY>hiphopButtonRange[2]&&mouseY<hiphopButtonRange[3] && mouseIsPressed){
    currentSort = "Hip-Hop"}
  if (currentSort == "Hip-Hop"){
        showColors() }
  
  let rnbButtonRange = [3*(windowWidth/7-50)+50,3*(windowWidth/7-50)+50+160,160,160+80]
if(mouseX>rnbButtonRange[0]&&mouseX<rnbButtonRange[1]&&mouseY>rnbButtonRange[2]&&mouseY<rnbButtonRange[3] && mouseIsPressed){
    currentSort = "R&B"}
  if (currentSort == "R&B"){
        showColors() }
}}

//SORT BY LOCATION
  let locationButtonRange = [(windowWidth/2)+50,(windowWidth/2)+50+180,20,120]
  fill(50,100,255)
  rect((windowWidth/2)+50,20,180,100,40)
  fill(0)
  textSize(22)
  textAlign(LEFT)
  text("sort by location",(windowWidth/2)+60,75)
  
   if(mouseX>locationButtonRange[0]&&mouseX<locationButtonRange[1]&&mouseY>locationButtonRange[2]&&mouseY<locationButtonRange[3]){
    showLocationSort = 1
  }
if (showLocationSort == 1){
  showGenreSort = 0 
  locationButtons()
  function locationButtons(){
    locationList = ["usa & canada","uk & ireland","caribbean","mainland europe","latin america","asia"]
    for(x=0;x<6;x++){
      fill(50,100,255)
      rect(x*(windowWidth/7-50)+350,160,150,80,40)
      fill(0)
      textSize(23)
      textAlign(CENTER)
      text(locationList[x],x*(windowWidth/7-50)+375,175,100)
    }}
  
  clickLocationButtons()
  function clickLocationButtons(){
  //click on USA button
  let usButtonRange = [0*(windowWidth/7-50)+350,0*(windowWidth/7-50)+350+160,160,160+80]
if(mouseX>usButtonRange[0]&&mouseX<usButtonRange[1]&&mouseY>usButtonRange[2]&&mouseY<usButtonRange[3] && mouseIsPressed){
    currentSort = "USACanada"}
  if (currentSort == "USACanada"){
        showColors() }
  //click on UK Ireland button
  let ukButtonRange = [1*(windowWidth/7-50)+350,1*(windowWidth/7-50)+350+160,160,160+80]
if(mouseX>ukButtonRange[0]&&mouseX<ukButtonRange[1]&&mouseY>ukButtonRange[2]&&mouseY<ukButtonRange[3] && mouseIsPressed){
    currentSort = "UKIreland"}
  if (currentSort == "UKIreland"){
        showColors() }
  //click on Caribbean button
  let caribbeanButtonRange = [2*(windowWidth/7-50)+350,2*(windowWidth/7-50)+350+160,160,160+80]
if(mouseX>caribbeanButtonRange[0]&&mouseX<caribbeanButtonRange[1]&&mouseY>caribbeanButtonRange[2]&&mouseY<caribbeanButtonRange[3] && mouseIsPressed){
    currentSort = "Caribbean"}
  if (currentSort == "Caribbean"){
        showColors() }
  //click on Europe button
  let europeButtonRange = [3*(windowWidth/7-50)+350,3*(windowWidth/7-50)+350+160,160,160+80]
if(mouseX>europeButtonRange[0]&&mouseX<europeButtonRange[1]&&mouseY>europeButtonRange[2]&&mouseY<europeButtonRange[3] && mouseIsPressed){
    currentSort = "Europe"}
  if (currentSort == "Europe"){
        showColors() }
  //click on Latin America button
  let latinButtonRange = [4*(windowWidth/7-50)+350,4*(windowWidth/7-50)+350+160,160,160+80]
if(mouseX>latinButtonRange[0]&&mouseX<latinButtonRange[1]&&mouseY>latinButtonRange[2]&&mouseY<latinButtonRange[3] && mouseIsPressed){
    currentSort = "LatinAmerica"}
  if (currentSort == "LatinAmerica"){
        showColors() }
  //click on Asia button
  let asiaButtonRange = [5*(windowWidth/7-50)+350,5*(windowWidth/7-50)+350+160,160,160+80]
if(mouseX>asiaButtonRange[0]&&mouseX<asiaButtonRange[1]&&mouseY>asiaButtonRange[2]&&mouseY<asiaButtonRange[3] && mouseIsPressed){
    currentSort = "Asia"}
  if (currentSort == "Asia"){
        showColors() }
  }
  } 
  
    //if mouse far away from buttons, get rid of them
if(mouseY>genreButtonRange[3]+170 && showGenreSort == 1 || mouseY>locationButtonRange[3]+170 && showLocationSort == 1){
  showGenreSort=0
  showLocationSort=0
  fill(255)
  rect(0,150,windowWidth,130)}
  
  
//end of draw
}

function seeAllButton(){
  fill(0)
  rect(20,20,100,50,15)
  fill(255)
  textSize(16)
  textStyle(BOLD)
  textAlign(LEFT)
  text("SEE ALL",40,50)
    if(mouseX>20&&mouseX<120&&mouseY>20&&mouseY<70 && mouseIsPressed){
    currentSort = "all"
    }}

function showColors(){
   if(currentSort == "all"){
    let hoverSpot = false
for (let i=0; i<1000; i++) {
    let chunk = (floor(i/40))-1
    let x =  ((windowWidth-25) / 25) + chunk*((windowWidth-50) / 25)+25
    let y = floor(i % 40) * (height / 70);
    fill("#"+dataArray[i]["Avg Color"]);
    noStroke()
    rect(x, y+295, (windowWidth-25) / 25+1, height / 70+1);
}
    //show album titles
    for (let i=0; i<1000; i++) {
    let chunk = (floor(i/40))-1
    let x =  ((windowWidth-25) / 25) + chunk*((windowWidth-50) / 25)+25
    let y = floor(i % 40) * (height / 70);
    noFill(); noStroke()
    if((dataArray[i].Title.length+dataArray[i].Artist.length)*8>200){
        wordWrap = 200}
      else{
        wordWrap = 1000}
    if(mouseY>(windowHeight-120)){
      textYOffset = 50}
      else{
      textYOffset = -10
    }
    if(mouseX>(windowWidth-250)){
      textXOffset = -170}
      else{
      textXOffset = 10
    }
      
     if (mouseX > x && mouseX < x + ((windowWidth-25) / 25+1) && mouseY - 295 > y && mouseY - 295 < y + (height / 70+1) && !hoverSpot){
        textSize(16); textAlign(LEFT)
        stroke(0);strokeWeight(3); fill(255)
        text(`${dataArray[i].Title} - ${dataArray[i].Artist}`,mouseX+textXOffset,mouseY-textYOffset, wordWrap)
         hoverSpot=true;}
}}
  else{
    let hoverSpot = false
for (let i=0; i<1000; i++) {
    let chunk = (floor(i/40))-1
    let x =  ((windowWidth-25) / 25) + chunk*((windowWidth-50) / 25)+25
    let y = floor(i % 40) * (height / 70);
    fill("#"+dataArray[i]["Avg Color"]);
    noStroke()
    if (dataArray[i]["Genre"] == currentSort){
    rect(x, y+295, (windowWidth-25) / 25+1, height / 70+1);}
    if (dataArray[i]["Country"] == currentSort){
    rect(x, y+295, (windowWidth-25) / 25+1, height / 70+1);}
}
    //show album titles
    for (let i=0; i<1000; i++) {
    let chunk = (floor(i/40))-1
    let x =  ((windowWidth-25) / 25) + chunk*((windowWidth-50) / 25)+25
    let y = floor(i % 40) * (height / 70);
    noFill(); noStroke()
      if((dataArray[i].Title.length+dataArray[i].Artist.length)*8>200){
        wordWrap = 200}
      else{
        wordWrap = 1000}
    if(mouseY>(windowHeight-120)){
      textYOffset = 50}
      else{
      textYOffset = -10
    }
    if(mouseX>(windowWidth-260)){
      textXOffset = -170}
      else{
      textXOffset = 10
    }
     if (mouseX > x && mouseX < x + ((windowWidth-25) / 25+1) && mouseY - 295 > y && mouseY - 295 < y + (height / 70+1) && !hoverSpot){
if (dataArray[i]["Genre"] == currentSort || dataArray[i]["Country"] == currentSort){

        textSize(16); textAlign(LEFT)
        stroke(0);strokeWeight(3); fill(255)
        text(`${dataArray[i].Title} - ${dataArray[i].Artist}`,mouseX+textXOffset,mouseY-textYOffset, wordWrap)
         hoverSpot=true;
      if(mouseY>height){
        noFill()}}}
}

}}

// data from chartmasters.org/spotify-most-streamed-albums/ . to measure how "popular" albums are, i had to choose between measuring streams or sales. since sales is ultimately an inacurrate method of measuring popularity past ~2010, i chose to define popular albums by their total # of streams on spotify, in November 2024. 

//genres have been simplified (ex. "hard rock" -> rock, "folk pop, folk rock" -> folk, "pop, rock, electronic" -> look at reviews and other databases to choose the best fit)