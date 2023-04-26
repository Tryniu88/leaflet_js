async function getUser() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const data = await fetch(`http://localhost:3000/login/${user}/${pass}`);
  const json = await data.json();
  console.log(json);

  if (json[0] != undefined) {
    localStorage.setItem("upr", JSON.stringify(json[0]));
  } else {
    localStorage.setItem("upr", "false");
  }
}

function checkUser() {
  const user = JSON.parse(localStorage.getItem("upr"));
  const url = window.location.href;

  if (user.upr != "user" && url.includes("user.html")) {
    window.location.href = "index.html";
  }
}
