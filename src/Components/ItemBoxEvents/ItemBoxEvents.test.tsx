import React from "react";
import { render, screen } from "@src/setupTests";
import { BoxEventsHome } from ".";
import { formatOnlyYear, formatWithoutYear } from "@src/Utils/formatData";

describe("Dashboard", () => {
  const simpleReturnApi = {
    start: "1989-12-10 00:00:00",
    title: "Event Test",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
  };

  render(
    <BoxEventsHome
      title={simpleReturnApi.title}
      start={simpleReturnApi.start}
      description={simpleReturnApi.description}
    />
  );

  const content = screen.getByTestId("content");
  const boxDate = screen.getByTestId("boxDate");
  const boxWithoutYear = screen.getByTestId("boxWithoutYear");
  const boxOnlyYear = screen.getByTestId("boxOnlyYear");
  const boxTitle = screen.getByTestId("boxTitle");
  const boxDescription = screen.getByTestId("boxDescription");

  test("should start with all elements", () => {
    expect(content).toBeInTheDocument();
    expect(boxDate).toBeInTheDocument();
    expect(boxWithoutYear).toBeInTheDocument();
    expect(boxOnlyYear).toBeInTheDocument();
    expect(boxTitle).toBeInTheDocument();
    expect(boxDescription).toBeInTheDocument();
  });

  test("should show correct values", () => {
    expect(boxWithoutYear.innerHTML).toEqual(
      formatWithoutYear(simpleReturnApi.start)
    );
    expect(boxOnlyYear.innerHTML).toEqual(
      formatOnlyYear(simpleReturnApi.start)
    );
    expect(boxTitle.innerHTML).toEqual(simpleReturnApi.title);
    expect(boxDescription.innerHTML).toEqual(simpleReturnApi.description);
  });
});
