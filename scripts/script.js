

var openButton = document.querySelector("header > nav > div > button");
var sluitButton = document.querySelector("nav > ul > li > button"); 


openButton.onclick = openMenu;
function openMenu() {
  var deNav = document.querySelector("nav > ul");
  deNav.classList.add("toonMenu");
}


sluitButton.onclick = sluitMenu;
function sluitMenu() {
  var deNav = document.querySelector("nav > ul");
  deNav.classList.remove("toonMenu");
}

//  bron: https://developer.mozilla.org/en-US/docs/Web/API/Element/keypress_event
// bron chat gpt: hoe kan je de escape key later werken als de sluitknop
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    sluitMenu(); 
  }
});

function applySystemDarkMode() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark-mode');
  } else {
      document.body.classList.remove('dark-mode');
  }
}

applySystemDarkMode();


window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemDarkMode);

