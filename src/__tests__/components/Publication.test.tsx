import { render } from "@testing-library/react";

import { PublicationModel } from "../../models";
import Publication from "../../components/Publication";

const publication: PublicationModel = {
  title: "Test Publication",
  body: "This is a test publication",
  userId: 1,
  id: 101,
};
const publishedBy = "Test User";

describe("Publication component", () => {
  it("renders the publication title and body", () => {
    const { getByText } = render(
      <Publication publication={publication} publishedBy={publishedBy} />,
    );

    expect(getByText("Test Publication")).toBeInTheDocument();
    expect(getByText("This is a test publication")).toBeInTheDocument();
  });

  it("renders the published by text", () => {
    const { getByText } = render(
      <Publication publication={publication} publishedBy={publishedBy} />,
    );

    expect(getByText("Published by Test User")).toBeInTheDocument();
  });
});
