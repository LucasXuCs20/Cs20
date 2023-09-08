function letterGrade(ans) {
  if (ans < 50) {
    return "F";
  } else if (ans < 60) {
    return "D";
  } else if (ans < 75) {
    return "C";
  } else if (ans < 90) {
    return "B";
  } else {
    return "A";
  }
}

function calc() {
  console.log("go");
  let num1 = +document.getElementById("g1").value;
  let num2 = +document.getElementById("g2").value;
  let num3 = +document.getElementById("g3").value;
  let num4 = +document.getElementById("g4").value;
  let num5 = +document.getElementById("g5").value;

  let ans = (num1 + num2 + num3 + num4 + num5) / 5;
  let letter = letterGrade(ans);

  document.getElementById("fOutput").innerHTML = `${ans}% ${letter}`;
  document.getElementById("o1").innerHTML = letterGrade(num1);
  document.getElementById("o2").innerHTML = letterGrade(num2);
  document.getElementById("o3").innerHTML = letterGrade(num3);
  document.getElementById("o4").innerHTML = letterGrade(num4);
  document.getElementById("o5").innerHTML = letterGrade(num5);
}
