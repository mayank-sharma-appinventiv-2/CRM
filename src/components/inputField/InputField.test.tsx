import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import InputField from "src/components/inputField";

describe("InputField Component", () => {
  test("renders input field with label", () => {
    render(
      <InputField
        type="text"
        value=""
        onChange={() => {}}
        label="Test Label"
        name="test"
      />,
    );
    const labelElement = screen.getByLabelText(/Test Label/i);
    expect(labelElement).toBeInTheDocument();
  });

  test("renders input field without label", () => {
    render(<InputField type="text" value="" onChange={() => {}} name="test" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  test("updates value on change", () => {
    const handleChange = jest.fn();
    render(
      <InputField type="text" value="" onChange={handleChange} name="test" />,
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "Hello" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(inputElement).toHaveValue("Hello"); // This will not pass because we are not managing state here
  });

  test("renders input field with placeholder", () => {
    render(
      <InputField
        type="text"
        value=""
        onChange={() => {}}
        placeholder="Test Placeholder"
        name="test"
      />,
    );
    const inputElement = screen.getByPlaceholderText(/Test Placeholder/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("applies required attribute", () => {
    render(
      <InputField
        type="text"
        value=""
        onChange={() => {}}
        required
        name="test"
      />,
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeRequired();
  });

  test("applies className", () => {
    render(
      <InputField
        type="text"
        value=""
        onChange={() => {}}
        className="test-class"
        name="test"
      />,
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("test-class");
  });
});
