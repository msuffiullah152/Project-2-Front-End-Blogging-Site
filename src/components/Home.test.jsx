import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";




describe("Home", () => {
    test("displays the correct header", () => {
      render(<Home />);
      const headerElement = screen.queryByText('Welcome');
      expect(headerElement).toBeTruthy();
    });
  });