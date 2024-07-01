import { Appointment } from "./models/appointment.js";
import { expect, test } from "vitest";

// Test for the createAppointment function
test("createAppointment should create a new appointment", () => {
  const id = generateId();
  const userId = "testUser";
  const description = "Test appointment";
  const creationDate = new Date();
  const updateDate = null;
  const completionDate = null;
  const dueDate = new Date();
  const category = "Test category";

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

  const appointment = JSON.parse(localStorage.getItem(id));

  expect(appointment).not.toBe(null);
  expect(appointment.id).toBe(id);
  expect(appointment.userId).toBe(userId);
  expect(appointment.description).toBe(description);
  // Add additional assertions for other fields here
});

// Test for the updateAppointment function
test("updateAppointment should update an existing appointment", () => {
  const id = generateId();
  const newValues = { description: "Updated description" };

  updateAppointment(id, newValues);

  const appointment = JSON.parse(localStorage.getItem(id));

  expect(appointment).not.toBe(null);
  expect(appointment.description).toBe(newValues.description);
});

// Test for the deleteAppointment function
test("deleteAppointment should delete an appointment", () => {
  const id = generateId();

  deleteAppointment(id);

  const appointment = JSON.parse(localStorage.getItem(id));

  expect(appointment).toBe(null);
});
