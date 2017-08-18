function download() {
  var i, dom;
  var images = ["./img/img1.jpeg", "./img/img2.jpeg", "./img/img3.jpeg"];
  for (i = 0; i < 3; ++i) {
    dom = document.createElement("a");
    dom.setAttribute("download", i.toString(10) + ".jpeg");
    dom.setAttribute("href", images[i]);
    dom.click();
  }
}
