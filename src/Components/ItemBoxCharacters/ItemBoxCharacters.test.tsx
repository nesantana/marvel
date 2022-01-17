import React from "react";
import { render, screen } from "@src/setupTests";
import { BoxCharactersHome } from ".";

describe("Dashboard", () => {
  const simpleReturnApi = {
    title: "3-D Man",
    src: `http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg`,
  };

  render(
    <BoxCharactersHome
      title={simpleReturnApi.title}
      src={simpleReturnApi.src}
    />
  );

  const content = screen.getByTestId("content");
  const img = screen.getByTestId("img");
  const title = screen.getByTestId("title");

  test("should start with all elements", () => {
    expect(content).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(title).toBeInTheDocument();
  });

  test("should show correct values", () => {
    expect(img.getAttribute("src")).toEqual(simpleReturnApi.src);
    expect(title.innerHTML).toEqual(simpleReturnApi.title);
  });
});
