// Triangle Perimeter Assignment Start Code
function dist(x1, y1, x2, y2) {
  let a = Math.pow(y1 - y2, 2);
  let b = Math.pow(x1 - x2, 2);

  return Math.sqrt(a + b);
}

function calc() {
  let x1 = +document.getElementById("x1").value;
  let x2 = +document.getElementById("x2").value;
  let x3 = +document.getElementById("x3").value;
  let y1 = +document.getElementById("y1").value;
  let y2 = +document.getElementById("y2").value;
  let y3 = +document.getElementById("y3").value;

  let AB = dist(x1, y1, x2, y2);
  let AC = dist(x1, y1, x3, y3);
  let BC = dist(x2, y2, x3, y3);

  document.getElementById("out1").innerHTML = AB;
  document.getElementById("out2").innerHTML = AC;
  document.getElementById("out3").innerHTML = BC;
  document.getElementById("fOut").innerHTML = AB + AC + BC;
}
