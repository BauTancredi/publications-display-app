import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import Navigation from "../../components/Navigation";

describe("Navigation component", () => {
  it("renders navigation links", () => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    const newPublicationLink = screen.getByRole("link", { name: "New Publication" });

    expect(homeLink).toBeInTheDocument();
    expect(newPublicationLink).toBeInTheDocument();
  });

  it("highlights the active link", () => {
    render(
      <Router>
        <Navigation />
      </Router>,
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    const newPublicationLink = screen.getByRole("link", { name: "New Publication" });

    // Initially, the "Home" link should be active
    expect(homeLink).toHaveClass("text-blue-500");
    expect(newPublicationLink).not.toHaveClass("text-blue-500");

    // Click on the "New Publication" link to make it active
    fireEvent.click(newPublicationLink);
    expect(newPublicationLink).toHaveClass("text-blue-500");
    expect(homeLink).not.toHaveClass("text-blue-500");
  });
});
