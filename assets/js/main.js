// Navbar change style function when scroll down

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= 700) {
    navbar.classList.add("navbar_col");
  } else {
    navbar.classList.remove("navbar_col");
  }
});

// Hamburgher menu  mobile version

const hamburgher = document.querySelector(".fa-bars");
const modalMenu = document.querySelector(".modal_menu_hide");

hamburgher.addEventListener("click", () => {
  if (modalMenu.classList.contains("modal_menu_hide")) {
    modalMenu.classList.remove("modal_menu_hide");
    modalMenu.classList.add("modal_menu_show");
    modalMenu.innerHTML = `
    <h2>MENU</h2>
    <p class="voice_menu"><a href="#we_are">we are</a></p>
    <p class="voice_menu"><a href="#we_do">we do</a></p>
    <p class="voice_menu"><a href="#careers">careers</a></p>
    <p class="voice_menu"><a href="#contact">contact us</a></p>`;
  } else {
    modalMenu.classList.remove("modal_menu_show");
    modalMenu.classList.add("modal_menu_hide");
  }

  const menuVoice = document.querySelectorAll(".voice_menu");

  for (const menu of menuVoice) {
    menu.addEventListener("click", () => {
      modalMenu.classList.remove("modal_menu_show");
      modalMenu.classList.add("modal_menu_hide");
    });
  }
});

// Jumbotron Slider

const backward = document.querySelector("#jumbotron .fa-chevron-left");
const forward = document.querySelector("#jumbotron .fa-chevron-right");
const jumboGround = document.querySelector("#jumbotron");
const dotOne = document.querySelector(".dot_one");
const dotTwo = document.querySelector(".dot_two");
const dotThree = document.querySelector(".dot_three");

forward.addEventListener("click", () => {
  if (jumboGround.classList.contains("slideOne")) {
    jumboGround.classList.remove("slideOne");
    jumboGround.classList.add("slideTwo");
    dotOne.classList.remove("active");
    dotTwo.classList.add("active");
  } else if (jumboGround.classList.contains("slideTwo")) {
    jumboGround.classList.remove("slideTwo");
    jumboGround.classList.add("slideThree");
    dotTwo.classList.remove("active");
    dotThree.classList.add("active");
  } else {
    jumboGround.classList.remove("slideThree");
    jumboGround.classList.add("slideOne");
    dotThree.classList.remove("active");
    dotOne.classList.add("active");
  }
});

backward.addEventListener("click", () => {
  if (jumboGround.classList.contains("slideOne")) {
    jumboGround.classList.remove("slideOne");
    jumboGround.classList.add("slideThree");
    dotOne.classList.remove("active");
    dotThree.classList.add("active");
  } else if (jumboGround.classList.contains("slideTwo")) {
    jumboGround.classList.remove("slideTwo");
    jumboGround.classList.add("slideOne");
    dotTwo.classList.remove("active");
    dotOne.classList.add("active");
  } else {
    jumboGround.classList.remove("slideThree");
    jumboGround.classList.add("slideTwo");
    dotThree.classList.remove("active");
    dotTwo.classList.add("active");
  }
});

// Tab section function to make request to fake json API
// to make the call work start a server with mamp or as in my case configure a private server on your machine and start it like this :brew services start httpd

const firstTab = document.querySelector("#first_tab");
const centerTab = document.querySelector("#center_tab");
const lastTab = document.querySelector("#last_tab");

firstTab.addEventListener("click", () => {
  fetch("./assets/ajax/tab1.json")
    .then((payload) => payload.json())
    .then((response) => {
      console.log(response.item.content);
      const contentArray = response.item.content;
      const tabPara = document.querySelector("#content_tabs p");
      tabPara.innerHTML = "";
      for (const para of contentArray) {
        tabPara.innerHTML += para;
      }
    })
    .catch((err) => {
      console.log("ERROR. Something went wrong.");
    });
});

centerTab.addEventListener("click", () => {
  fetch("./assets/ajax/tab2.json")
    .then((payload) => payload.json())
    .then((response) => {
      console.log(response.item.content);
      const contentArray = response.item.content;
      const tabPara = document.querySelector("#content_tabs p");
      tabPara.innerHTML = "";
      for (const para of contentArray) {
        tabPara.innerHTML += para;
      }
    })
    .catch((err) => {
      console.log("ERROR. Something went wrong.");
    });
});

lastTab.addEventListener("click", () => {
  fetch("./assets/ajax/tab3.json")
    .then((payload) => payload.json())
    .then((response) => {
      console.log(response.item.content);
      const contentArray = response.item.content;
      const tabPara = document.querySelector("#content_tabs p");
      tabPara.innerHTML = "";
      for (const para of contentArray) {
        tabPara.innerHTML += para;
      }
    })
    .catch((err) => {
      console.log("ERROR. Something went wrong.");
    });
});
