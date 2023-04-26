import React from "react";
import { render, screen } from "@testing-library/react";

import CreatePage from "./CreatePost";




describe("CreatePage", () => {
    test("displays the correct header", () => {
      render(<CreatePage />);
      const headerElement = screen.queryByText('Create a New Post');
      expect(headerElement).toBeTruthy();
    });
  });