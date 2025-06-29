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
const menuItems = [
  { title: 'Add new task', url: '/' },
  { title: 'Delete task',  url: '/' },
  {title:'Show cleared tasked', url:'/'}
];


const newTodo = document.createElement('a');
const clearAllTodo = document.createElement('a');
const finTask = document.createElement('a');
const showCompleted = document.createElement('a');

newTodo.textContent="Add new task";
clearAllTodo.textContent="clear all taskes";
finTask.textContent="done with checked task";
showCompleted.textContent= "show completed tasks";


const divmenuElement = document.createElement('div');
divmenuElement.classList.add('divmenu');

divmenuElement.append(newTodo, clearAllTodo,finTask, showCompleted);
bodyElement.appendChild(divmenuElement);





