const element = "animated_bg_img"
const animation = "animation_img"
const container = "animated_bg_container"
const animationsArray = ["Asset-36RubyBlink-256.gif","Rubybot-scratch.gif","Rubyfornia-v1.0-618x618-stretch-f.gif"]

//get window size
// function getWindowSize(){
//     // Get width and height of the window excluding scrollbars
//     let w = document.documentElement.clientWidth;
//     let h = document.documentElement.clientHeight;
//     console.log(`Window width: ${w}, height: ${h}`)
// }

function getWidthHeight(elemId){
  let grabElement = document.getElementById(elemId);
  let width = grabElement.clientWidth;
  let height = grabElement.clientHeight;
  // console.log(`Image width: ${width}, height: ${height}`);
  return { width, height}
}

function changeHeight(elementId,height){
  let grabElement = document.getElementById(elementId);
  return grabElement.style.height = height + "px"
}

//FOR DIV
function getCurrentBg(el){
  return document.getElementById(el).src
}

//
//Apply new bg image
//
function applyBackground(fullUrl, el){
  return document.getElementById(el).src = fullUrl
}

//
//Apply new animation
//
function applyAnimation(fullUrl, el){
  return document.getElementById(el).src = fullUrl
}

//
//Generate full path for bg img
//
function generateBgFullPath(image){
  return "./images/bg/" + image
}

//
//Generate full path for animation img
//
function generateAnimationFullPath(image){
  return "./images/animation/" + image
}

//
// Determine if it is time to change background
//
function isTimeToChangeBackground(){
  let imgName = ""
  let imgExtention = ".png"

  let rightNow = new Date()
  let hours = rightNow.getHours()
  let minutes = rightNow.getMinutes()

  //for TESTING
  // hours = 4
  // minutes = 23
  //end for testing

  //bolshe 2x no menishe 3 i 14 minut

  console.log(`Hours: ${hours} Minutes: ${minutes}`)

  if (0 <= hours && hours < 2){
    imgName = "v10-0000"
  } else if ((2 <= hours) && (hours = 3 && minutes <= 14)){
    imgName = "v10-0200"
    console.log('2 nochi')
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
  pickAnimationRandom()
  pickAnimationPosition()
}

//
//Generate random number
//
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//
//Random number represents position in array of animations
//
function pickAnimationRandom(){
  let animationImg = getRandomInt(animationsArray.length)
  let path = generateAnimationFullPath(animationsArray[animationImg])
  document.getElementById(animation).src = path
}

function pickAnimationPosition(){
  let currPos = getRandomInt(8)
  document.getElementById(animation).classList.add("position" + currPos);
}

//
//Listen for window size change
//
window.addEventListener("resize", () => {
  // getWindowSize();
  let newMeasurements = getWidthHeight(element);
  console.log(newMeasurements)
  changeHeight(container, newMeasurements.height)
});

setInterval(() => isTimeToChangeBackground(), 6000); //check for update every minute

function init(){
  let newMeasurements = getWidthHeight(element);
  changeHeight(container, newMeasurements.height)
  isTimeToChangeBackground()
  pickAnimationRandom()
  pickAnimationPosition()
}

init()
