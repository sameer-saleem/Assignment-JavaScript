var hdngs = document.getElementById("hdngs");

function HandleBG() {
  getBG = prompt("Give Me Background Color");
  hdngs.style.backgroundColor = getBG;
}

function HandleColor() {
  getColor = prompt("Give Me Text Color");
  hdngs.style.color = getColor;
}

// ./images/codeImg.webp
// ChanginImg

function imgChnage(val) {
  var getImg = document.getElementById("ChanginImg");
  console.log(getImg, val);
  if (val === "show") {
    getImg.style.opacity = "1";
    getImg.style.visibility = "visible";
  } else if (val === "hide") {
    getImg.style.opacity = "0";
    getImg.style.visibility = "hidden";
  } else if (val === "big") {
    getImg.style.transition = "0.4s ease-in";
    getImg.style.transform = "scale(1.5)";
    getImg.style.opacity = "1";
    getImg.style.visibility = "visible";
    getImg.style.margin = "80px 0";
  } else if (val === "small") {
    getImg.style.transition = "0.4s ease-in";
    getImg.style.transform = "scale(0.7)";
    getImg.style.opacity = "1";
    getImg.style.visibility = "visible";
    getImg.style.margin = "0";

  } else {
    return;
  }
}

function Changer(val, e) {
  if (val == "over") {
    e.src = "./images/pic_bulbon.gif";
  } else {
    e.src = "./images/pic_bulboff.gif";
  }
}

function paraColors() {
  var getPara = document.getElementsByTagName("p");
  var userColor = prompt("Add Paragraph Color");
  for (var i = 0; i < getPara.length; i++) {
    getPara[i].style.color = userColor;
  }
}
