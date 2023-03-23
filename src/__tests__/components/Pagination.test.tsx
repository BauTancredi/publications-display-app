import { render, fireEvent } from "@testing-library/react";

import Pagination from "../../components/Pagination";

const onPageChangeMock = jest.fn();
const publicationsPerPage = 10;
const totalPublications = 100;
const currentPage = 0;

describe("Pagination", () => {
  it("highlights the current page number", () => {
    const { getByText } = render(
      <Pagination
        currentPage={currentPage}
        publicationsPerPage={publicationsPerPage}
        totalPublications={totalPublications}
        onPageChange={onPageChangeMock}
      />,
    );

    // The current page should have a class of "text-yellow-500"
    const currentPageNumber = currentPage + 1;
    const currentPageElement = getByText(currentPageNumber.toString());

    expect(currentPageElement).toHaveClass("text-yellow-500");
  });

  it("calls onPageChange when a page number is clicked", () => {
    const { getByText } = render(
      <Pagination
        currentPage={currentPage}
        publicationsPerPage={publicationsPerPage}
        totalPublications={totalPublications}
        onPageChange={onPageChangeMock}
      />,
    );

    const pageNumberToClick = 2;
    const pageElementToClick = getByText(pageNumberToClick.toString());

    fireEvent.click(pageElementToClick);

    // onPageChange should be called with the correct page number
    expect(onPageChangeMock).toHaveBeenCalledTimes(1);
    expect(onPageChangeMock).toHaveBeenCalledWith(pageNumberToClick - 1);
  });
});
