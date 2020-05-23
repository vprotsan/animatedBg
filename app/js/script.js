//
// CANVAS
//
// let canvas = document.getElementById("canvas"),
// ctx = canvas.getContext("2d");
//
// canvas.width = 903;
// canvas.height = 657;
//
// let background = new Image();
// background.src = "http://www.samskirrow.com/background.png";
//
// // Make sure the image is loaded first otherwise nothing will draw.
// background.onload = function(){
//     ctx.drawImage(background,0,0);
// }
//
// END CANVAS
//
//
// element.style.background = "url('a.png') 0 100%, url('b.png') 50px 50px ";

const element = "animated_bg_img"

//FOR DIV
function getCurrentBg(el){
  return document.getElementById(el).src
}

//apply new bg image
function applyBackground(fullUrl, el){
  return document.getElementById(el).src = fullUrl
}

//generate full path for bg img
function generateBgFullPath(image){
  return "./images/bg/" + image
}

//generate full path for animation img
function generateAnimationFullPath(image){
  return "./images/animation/" + image + '.gif'
}

function isTimeToChangeBackground(){
  let imgName = ""
  let imgExtention = ".png"

  let rightNow = new Date()
  let hours = rightNow.getHours()
  let minutes = rightNow.getMinutes()

  //for TESTING
  hours = 4
  minutes = 23
  //end for testing

  console.log(`Hours: ${hours} Minutes: ${minutes}`)

  if (0 <= hours && hours < 2){
    imgName = "v10-0000"
  } else if (2 <= hours && (hours >= 3 && minutes <= 14)){
    imgName = "v10-0200"
  } else if ((3 >= hours && minutes > 14) && hours < 4){
    imgName = "v10-0314"
  } else if (4 <= hours && hours < 6){
    imgName = "v10-0400"
  } else if (6 <= hours && hours < 8){
    imgName = "v10-0600"
  } else if (8 <= hours && hours < 10){
    imgName = "v10-0800"
  } else if (10 <= hours && hours < 12){
    imgName = "v10-1000"
  } else if (12 <= hours && hours < 14){
    imgName = "v10-1200"
  } else if (14 <= hours && hours < 16){
    imgName = "v10-1400"
  } else if (16 <= hours && hours < 18){
    imgName = "v10-1600"
  } else if (18 <= hours && hours < 20){
    imgName = "v10-1800"
  } else if (20 <= hours && hours < 22){
    imgName = "v10-2000"
  } else if (22 <= hours && hours < 0){
    imgName = "v10-2200"
  } else {
    imgName = "v10-0000"
  }

  imgName += imgExtention

  let currBgFullPath = getCurrentBg(element)
  let currBgArray = currBgFullPath.split("/")
  currBg = currBgArray.slice(-1)[0].replace(/[{()}"]/g, '');

  console.log(`Current background: ${currBg}, calculated bg: ${imgName}`)

  if (currBg === imgName) return

  generateBgFullPath(imgName)
  applyBackground(generateBgFullPath(imgName), element)
}

isTimeToChangeBackground()

setInterval(() => isTimeToChangeBackground(), 3000); //check for update every minute
