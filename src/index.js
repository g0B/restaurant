import "./styles.css";
import homePageContent from "./home.js";
import aboutPageContent from "./about.js";
import menuPageContent from "./menu.js";
console.log("Test");

const mainContent = document.getElementById("content");

const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const aboutButton = document.getElementById("about");

homeButton.addEventListener('click', () => {
    mainContent.innerHTML = '';
    mainContent.appendChild(homePageContent);
    }
);

menuButton.addEventListener('click', () => {
    mainContent.innerHTML = '';
    mainContent.appendChild(menuPageContent);
    }
);

aboutButton.addEventListener('click', () => {
    mainContent.innerHTML = '';
    mainContent.appendChild(aboutPageContent);
    }
);




