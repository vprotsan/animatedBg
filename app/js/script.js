const element = "animated_background"

//return current background img
function getCurrentBg(el){
  return document.getElementById(el).style.backgroundImage
}

//apply new bg image
function applyBackground(fullUrl, el){
  return document.getElementById(el).style.backgroundImage = "url(" + fullUrl + ")";
}

//generate full path for bg img
function generateBgFullPath(image){
  return "../images/bg/" + image
}

//generate full path for animation img
function generateAnimationFullPath(image){
  return "../images/animation/" + image + '.gif'
}

function isTimeToChangeBackground(){

  let imgName = ""
  let imgExtention = ".png"

  // let rightNow = new Date()
  // let hours = rightNow.getHours()
  // let minutes = rightNow.getMinutes()

  //for testing
  // console.log(hours, minutes)
  let hours = 10
  let minutes = 23
  console.log(hours, minutes)
  //end for testing

  if (0 <= hours && hours < 2){
    imgName = "v10-0000"
    console.log("this condition")
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
    console.log("default")
    // imgName = "v10-0000"
  }

  imgName += imgExtention
  console.log(imgName)

  let currBgFullPath = getCurrentBg(element)
  let currBgArray = currBgFullPath.split("/")
  currBg = currBgArray[2].replace(/[{()}"]/g, '');

  //test
  console.log(currBg)
  console.log(imgName)
  //end test

  if (currBg === imgName) return

  generateBgFullPath(imgName)
  applyBackground(generateBgFullPath(imgName), element)
}

isTimeToChangeBackground()
