"use strict";

document.addEventListener('DOMContentLoaded', () => {
    const bodyElement = document.querySelector('body');

    // Get buttons
    const createNewTaskBtn = document.querySelector('#addnewtask');

    // Add event listener to "Add new task" button
    createNewTaskBtn.addEventListener("click", (event) => {
        event.preventDefault();
        
        // Hide specified elements
       // document.querySelector('.menucontainer').classList.add('invisible');
      //document.querySelector('.maintaskSheet').classList.add('invisible');
        document.querySelector('.todoContainer').classList.add('invisible');
        //document.querySelector('#newtask').classList.add('invisible');
        
        // Create new task form
        createNewTaskForm();
    });

    function createNewTaskForm() {
        // Remove existing form if any
        const existingForm = document.querySelector('#newTaskForm');
        if (existingForm) existingForm.remove();
        
        // Create new form
        const formElement = document.createElement('form');
        formElement.id = 'newTaskForm';
        
        // Create label
        const taskLabel = document.createElement('label');
        taskLabel.textContent = "New task:";
        taskLabel.htmlFor = "newTaskInput";
        
        // Create input field
        const taskInput = document.createElement('input');
        taskInput.type = "text";
        taskInput.id = "newTaskInput";
        taskInput.placeholder = "Enter task name";
        taskInput.required = true;

        //Description label
        const descLabel = document.createElement('label');
        descLabel.textContent = "Description:";
        descLabel.htmlFor = "taskDescriptionInput";

        //Description input
        const descInput = document.createElement('input');
        descInput.type = "text";
        descInput.placeholder = "describe your task"

        
        // Create submit button
        const submitButton = document.createElement('button');
        submitButton.type = "submit";
        submitButton.textContent = "Add Task";

        //Create undo button
        const undoButton = document.createElement('button');
        undoButton.type ="button";
        undoButton.textContent = "Undo task";
        
        // Assemble form
        formElement.appendChild(taskLabel);
        formElement.appendChild(taskInput);
        formElement.appendChild(document.createElement('br'));
        formElement.appendChild(document.createElement('br'));
        formElement.appendChild(descLabel);
        formElement.appendChild(descInput);
        formElement.appendChild(document.createElement('br'));
        formElement.appendChild(document.createElement('br'));
        formElement.appendChild(submitButton);
        formElement.appendChild(undoButton);
        
        // Add form to body
        bodyElement.appendChild(formElement);
    }
});