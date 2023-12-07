/*menu button js*/
const header = document.querySelector("header");
const menuButton = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-links");
const exitButton = document.querySelector(".exit");
menuButton.onclick = () => {
  if (menuItems.classList.contains("hidden")) {
    menuItems.classList.remove("hidden");
    menuButton.innerHTML = "X";
    header.style.backgroundColor = "#09151cb5";
  } else {
    menuItems.classList.add("hidden");
    menuButton.innerHTML = '<svg width="20px" height="20px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#fff" fill-rule="evenodd" d="M18 5a1 1 0 100-2H2a1 1 0 000 2h16zm0 4a1 1 0 100-2h-8a1 1 0 100 2h8zm1 3a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 5a1 1 0 100-2h-8a1 1 0 100 2h8z"/></svg>';
    header.style.backgroundColor = "transparent";
  }
};

document.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    header.style.backgroundColor = "#09151cb5";
    header.style.padding = "0px 5%";
    menuItems.style.top = "8%";
  } else {
    header.style.backgroundColor = "transparent";
    header.style.padding = "15px 5%";
    menuItems.style.top = "11%";
  }
});

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

/*for(var c=0;menuItems.children.length-1;c++){
    menuItems.children[c].onclick=()=>{
        menuItems.classList.add('hidden');
        menuButton.innerHTML='Menu';
    }
}*/
