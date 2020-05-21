const element = "animated_background"

//return current background img
function getCurrentBg(el){
  return img = document.getElementById(el).style.backgroundImage
}

//apply new bg image
function applyBackground(fullUrl, el){
    return document.getElementById(el).style.backgroundImage = "url(" + fullUrl + ")";
}

//generate full path for bg img
function generateBgFullPath(image){
  return "./images/bg/" + image + '.png'
}

//generate full path for animation img
function generateAnimationFullPath(image){
  return "./images/animation/" + image + '.gif'
}

function isTimeToChangeBackground(){

  let bgImg = /[a-z][A-Z][0-9]/g
  let rightNow = new Date()
  let hours = rightNow.getHours()
  let minutes = rightNow.getMinutes()

  //for testing
  console.log(hours, minutes)
  hours = 4
  minutes = 23
  console.log(hours, minutes)
  //end for testing

  if (0 <= hours < 2){
    // console.log("hours " + hours, "minutes: " + minutes)

  } else if (2 <= hours && (hours <= 3 && minutes <= 14)){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if ((3 <= hours && minutes > 14) && hours < 4){
    // console.log("hours " + hours, "minutes: " + minutes)
    bgImg =
  } else if (4 <= hours < 6){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if (6 <= hours < 8){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if (8 <= hours < 10){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if (10 <= hours < 12){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if (12 <= hours < 14){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if (14 <= hours < 16){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if (16 <= hours < 18){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if (18 <= hours < 20){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if (20 <= hours < 22){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else if (22 <= hours < 0){
    // console.log("hours " + hours, "minutes: " + minutes)
  } else {
    // console.log("hours " + hours, "minutes: " + minutes)
  }

}
