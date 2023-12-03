const form = document.querySelector("form");
let j;
j = 0;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("sub").value = "submitting...";
  if (j == 0) {
    let data = new FormData(form);
    fetch(
      "https://script.google.com/macros/s/AKfycbzurEa3kHY-IdselxNFdI4jUnUNwJoEQjzXgQRWkgNg7pNWONvrGIi9RjNV0XlLStPI/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        j = j + 1;
        console.log(data);
        document.querySelector("#sub").value = data;
        console.log(j);
      });
  } else {
    document.getElementById("sub").value = "You are already registered!";
  }
});
