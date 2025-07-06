"use-strict"
const bodyElement = document.querySelector('body');

const navbarContainer = document.createElement('div');
navbarContainer.classList.add('navbarcontainer');

//Titel element
const h1titel = document.createElement('h1');
h1titel.textContent = "TO DO LIST MAKER";
h1titel.id = "mainTitle";

// navbarcontainer
navbarContainer.appendChild(h1titel);
bodyElement.appendChild(navbarContainer);

//menualts



document.addEventListener('load', () => {
  
const creteNewTask = document.querySelector('#addnewtask');
const deleteBtn = document.querySelector('#deletetask');
const showClearedTaskBtn = document.querySelector('#showclearedTask');
const markedCleardBtn = document.querySelector('markedCleardTask');
  creteNewTask.addEventListener("clicked", (event) => {
    event.preventDefault();

  })
})





