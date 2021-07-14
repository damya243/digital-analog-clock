let t = setInterval(() => {
  var d = new Date();
  console.log(d);
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  // console.log(s);


  document.getElementById("digital").innerHTML = h + ":" + m + ":" + s;
  var t = document.getElementById("digital");
  console.log(t);
  t.style.fontSize = "80px";


  h = h * 30 + m / 2;
  m = 6 * m;
  s = 6 * s;
  console.log(s);
  var hh = document.querySelector(".hour");
  hh.style.transform = `rotate(${h}deg)`;
  var hh = document.querySelector(".hour");
  var mm = document.querySelector(".minute");
  mm.style.transform = `rotate(${m}deg)`;
  var ss = document.querySelector(".second");
  ss.style.transform = `rotate(${s}deg)`;
}, 1000);
