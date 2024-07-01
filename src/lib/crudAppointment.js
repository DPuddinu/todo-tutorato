import { Appointment } from "./models/appointment.js";

// Function to open the modal to be inserted in the + button (new appointment)
export function openModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "block";
}

// Function to close the modal when clicking outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Generate a unique ID
function generateId() {
  return Math.floor(Math.random() * 999999);
}

// User-generated data extracted from HTML page
const DESCRIPTION_KEY = "description";
const DUEDATE_KEY = "dueDate"; // appointment due date
const CATEGORY_KEY = "category";
const USERID_KEY = "userId";

// Retrieve data from HTML form
export function getDataFromForm() {
  const description = document.getElementById(DESCRIPTION_KEY).value;
  const dueDate = new Date(document.getElementById(DUEDATE_KEY).value);
  const category = document.getElementById(CATEGORY_KEY).value;

  // Retrieve user ID from localStorage
  const userId = localStorage.getItem(USERID_KEY);

  // Generate appointment ID
  const id = generateId();

  // Create creation date
  const creationDate = new Date();

  // Initially, updateDate and completionDate are null
  const updateDate = null;
  const completionDate = null;

  // Create appointment
  createAppointment(
    id,
    userId,
    description,
    creationDate,
    updateDate,
    completionDate,
    dueDate,
    category
  );
}

// Event listener to call getDataFromForm when the form is submitted
document
  .getElementById("yourFormId") // INSERT CORRECT HTML ID !!!!!!!!!!!!!!!!!!
  .addEventListener("submit", function (event) {
    event.preventDefault();
    getDataFromForm();
  });

// Create appointment
export function createAppointment(
  id,
  userId,
  description,
  creationDate,
  updateDate,
  completionDate,
  dueDate,
  category
) {
  const appointment = new Appointment(
    id,
    userId,
    description,
    creationDate,
    updateDate,
    completionDate,
    dueDate,
    category
  );
  localStorage.setItem(appointment.id, JSON.stringify(appointment));
  displayAppointments(); // Update user interface after creating an appointment
}

// Update appointment
export function updateAppointment(id, newValues) {
  const appointment = JSON.parse(localStorage.getItem(id));
  if (appointment) {
    for (let key in newValues) {
      if (appointment.hasOwnProperty(key)) {
        appointment[key] = newValues[key];
      }
    }
    appointment.updateDate = new Date();
    localStorage.setItem(appointment.id, JSON.stringify(appointment));
    displayAppointments(); // Update user interface after modifying an appointment
  } else {
    displayMessage("Appointment not found"); // Show a message to the user if the appointment is not found
  }
}

// Delete appointment
function deleteAppointment(id) {
  localStorage.removeItem(id);
  displayAppointments(); // Update user interface after deleting an appointment
}

// Uncheck appointment
export function uncheckAppointment(id) {
  const appointment = JSON.parse(localStorage.getItem(id));
  if (appointment) {
    appointment.completionDate = new Date();
    localStorage.setItem(appointment.id, JSON.stringify(appointment));
    updateUI(appointment.id);
  } else {
    displayMessage("Appointment not found"); // Show a message to the user if the appointment is not found
  }
}

// Update user interface by crossing out the text
export function updateUI(id) {
  const appointment = JSON.parse(localStorage.getItem(id));
  if (appointment) {
    const element = document.getElementById(id);
    if (element && appointment.completionDate) {
      element.style.textDecoration = "line-through";
    }
  }
}

// Display appointments
export function displayAppointments() {
  const table = document.createElement("table");
  const keys = Object.keys(localStorage);
  for (let i = 0; i < keys.length; i++) {
    const appointment = JSON.parse(localStorage.getItem(keys[i]));
    const row = table.insertRow();
    row.insertCell().textContent = appointment.creationDate;
    row.insertCell().textContent = appointment.description;
    row.insertCell().textContent = appointment.category;

    const uncheckButton = document.createElement("button");
    uncheckButton.textContent = "Uncheck";
    uncheckButton.onclick = function () {
      uncheckAppointment(appointment.id);
      updateUI(appointment.id);
    };
    row.insertCell().appendChild(uncheckButton);

    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.onclick = function () {
      // Get new values from HTML form
      const newDescription = document.getElementById("newDescription").value;
      const newDueDate = new Date(document.getElementById("newDueDate").value);
      const newCategory = document.getElementById("newCategory").value;

      // Create an object with the new values
      const newValues = {
        description: newDescription,
        dueDate: newDueDate,
        category: newCategory,
      };

      // Call updateAppointment with the new values
      updateAppointment(appointment.id, newValues);
    };
    row.insertCell().appendChild(updateButton);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteAppointment(appointment.id);
      row.remove();
    };
    row.insertCell().appendChild(deleteButton);
  }
  document.body.appendChild(table);
}

// Function to display a message to the user
export function displayMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
}

// add the displayMessage element to the HTML page
