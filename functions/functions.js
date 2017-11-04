function open_read_more2() {
  if (window.innerWidth < 500) {
    document.getElementById("s2-readMore-id").style.width = "100%";
    document.getElementById("section2-id").style.marginLeft = "100%";
    document.getElementById("s2-readMore-id").style.opacity = "1";
    document.getElementById("section2-textbox-id").style.left = "100%";
  }
  else {
    document.getElementById("s2-readMore-id").style.width = "30%";
    document.getElementById("s2-readMore-id").style.opacity = "1";
    document.getElementById("section2-id").style.marginLeft = "30%";
    document.getElementById("section2-textbox-id").style.left = "36%";
    document.getElementById("s2-shade-layer-id").style.opacity = "0.7";
  }

}
function close_read_more2() {
  document.getElementById("s2-readMore-id").style.width = "0";
  document.getElementById("s2-readMore-id").style.opacity = "0";
  document.getElementById("section2-id").style.marginLeft= "0";
  document.getElementById("section2-textbox-id").style.left = "6%";
  document.getElementById("s2-shade-layer-id").style.opacity = "0";
}
function open_read_more3() {
  if (window.innerWidth < 500) {
    document.getElementById("s3-readMore-id").style.width = "100%";
    document.getElementById("s3-readMore-id").style.opacity = "1";
    document.getElementById("section3-id").style.marginLeft = "100%";
    document.getElementById("section3-textbox-id").style.left = "100%";
  }
  else {
    document.getElementById("s3-readMore-id").style.width = "30%";
    document.getElementById("s3-readMore-id").style.opacity = "1";
    document.getElementById("section3-id").style.marginLeft = "30%";
    document.getElementById("s3-shade-layer-id").style.opacity = "0.7";
  }
}
function close_read_more3() {
  document.getElementById("s3-readMore-id").style.width = "0";
  document.getElementById("s3-readMore-id").style.opacity = "0";
  document.getElementById("section3-id").style.marginLeft= "0";
  document.getElementById("s3-shade-layer-id").style.opacity = "0";
  document.getElementById("section3-textbox-id").style.left = "66%";
}
