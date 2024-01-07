import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DynamicDropDown from "./DynamicDropDown";
import userEvent from "@testing-library/user-event";
 

describe("DropDown Component", () => {
  it("User Interaction", () => {
    render(<DynamicDropDown/>);
    const selectElement=screen.getByRole("combobox")

    expect(selectElement).toBeInTheDocument()
    
    userEvent.selectOptions(selectElement,"/api/country")
    expect(selectElement).toHaveValue("/api/country")


  });
});
 