import LoginForm from "../LoginPage";
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, it } from "vitest";

import { MemoryRouter } from "react-router-dom";

it("renders login form and handles form submission", () => {
  // Render the component
  render(
    <MemoryRouter>
      <LoginForm />
    </MemoryRouter>
  );

  // Get form elements
  const usernameInput: HTMLInputElement = screen.getByLabelText(/username/i);
  const passwordInput: HTMLInputElement = screen.getByLabelText(/password/i);
  // Use getAllByText to get an array of elements that match the query
  const submitButtons = screen.getAllByText(/login/i);

  // Assuming you want the first submit button in the array
  const submitButton = submitButtons[0];

  // Simulate user input
  fireEvent.change(usernameInput, { target: { value: "testuser" } });
  fireEvent.change(passwordInput, { target: { value: "testpassword" } });

  // Check if the values are reflected in the component state
  expect(usernameInput.value).toBe("testuser");
  expect(passwordInput.value).toBe("testpassword");

  // Simulate form submission
  fireEvent.click(submitButton);

  // You can add more assertions based on your application logic
});
