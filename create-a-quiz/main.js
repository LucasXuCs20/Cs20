//Program Title
document.getElementById("submit").addEventListener("click", check);

const data = [
  "no",
  "conversational way",
  "inappropriate requests",
  "chatgpt plus",
];

//INPUT
function markQuestion(q, ans) {
  if (ans == data[q - 1]) {
    document.getElementById(`q${q}`).innerHTML = "Correct";
    document.getElementById(`res${q}`).classList = "y";
    return 1;
  } else {
    document.getElementById(`q${q}`).innerHTML = "Incorrect";
    document.getElementById(`res${q}`).classList = "n";
    return 0;
  }
}

function check() {
  let r1 = document.getElementById("res1").value.trim().toLowerCase();
  let r2 = document.getElementById("res2").value.trim().toLowerCase();
  let r3 = document.getElementById("res3").value.trim().toLowerCase();
  let r4 = document.getElementById("res4").value.trim().toLowerCase();

  let score = 0;
  score += markQuestion(1, r1);
  score += markQuestion(2, r2);
  score += markQuestion(3, r3);
  score += markQuestion(4, r4);

  let percent = (score / 4) * 100;
  document.getElementById("scorereturn").innerHTML = score + "/4";
  document.getElementById("scorepercent").innerHTML = percent + "%";
}

//PROCESS

//OUTPUT
document.getElementById("q" + String(i + 1)).innerHTML = "Incorrect";
document.getElementById("res" + String(i + 1)).classList = "n";
document.getElementById("q" + String(i + 1)).innerHTML = "Correct";
document.getElementById("res" + String(i + 1)).classList = "y";
